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
		"content": `<style>.gvl66eajx {
  fill: currentColor;
  d: path("M2 17V7h17.885v10zm6-1h10.885V8H8zm12.885-1.884V9.904H22v4.212z");
}
</style><path class="gvl66eajx"/>`,
		"fallback": "material-symbols-light:battery-android-2-outline-sharp",
	});
}

export default Component;
