import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.g9b_-mbeq {
  fill: currentColor;
  d: path("M14.742 15.116h.831V8.885h-.65l-1.917 1.396l.456.629l1.28-.918zm-6.188 0h3.802v-.827H9.409V8.904h-.855zM21 4.98v10.73q0 1.357-.977 2.323t-2.35.966H6.327q-1.372 0-2.35-.966T3 15.712V4.98z");
}
</style><path class="g9b_-mbeq"/>`,
		"fallback": "material-symbols-light:game-button-l1-sharp",
	});
}

export default Component;
