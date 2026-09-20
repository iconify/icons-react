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
		"content": `<style>.ygpqk7ong {
  fill: currentColor;
  d: path("M1.616 14.5v-1H5v1zM11.5 7V2.616h1V7zm5.766 2.385l-.689-.708l2.44-2.402l.695.708zM19 14.5v-1h3.385v1zm.833 6.76L15.573 17H7.5v-2h6.073L2.74 4.167l.714-.713l17.092 17.092z");
}
</style><path class="ygpqk7ong"/>`,
		"fallback": "material-symbols-light:backlight-high-off-outline",
	});
}

export default Component;
