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
		"content": `<style>.adsqt6b_q {
  fill: currentColor;
  d: path("M4.385 14.616V9.385h11v5.23zM2 17V7h17.885v10zm1-1h15.885V8H3zm17.885-1.884V9.904H22v4.212z");
}
</style><path class="adsqt6b_q"/>`,
		"fallback": "material-symbols-light:battery-android-frame-6-sharp",
	});
}

export default Component;
