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
		"content": `<style>.n6z_0o_kl {
  fill: currentColor;
  d: path("M2 17V7h17.885v10zm4-1h12.885V8H6zm14.885-1.884V9.904H22v4.212z");
}
</style><path class="n6z_0o_kl"/>`,
		"fallback": "material-symbols-light:battery-android-1-sharp",
	});
}

export default Component;
