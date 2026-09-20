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
		"content": `<style>.c1vacfsgz {
  fill: currentColor;
  d: path("M1 15v-2h4v2zm10-8V2h2v5zm6.65 2.75l-1.4-1.4l2.825-2.825l1.425 1.4zM19 15v-2h4v2zm.775 7.625L15.15 18H7v-3h5.15L1.375 4.225L2.8 2.8l18.4 18.4z");
}
</style><path class="c1vacfsgz"/>`,
		"fallback": "material-symbols:backlight-high-off",
	});
}

export default Component;
