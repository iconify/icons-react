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
		"content": `<style>.zkw4ugbqd {
  fill: currentColor;
  d: path("M1 15v-2h4v2zm5.35-5.25L3.525 6.925l1.4-1.425L7.75 8.35zM7 18v-3h10v3zm4-11V2h2v5zm6.65 2.75l-1.4-1.4l2.825-2.825l1.425 1.4zM19 15v-2h4v2z");
}
</style><path class="zkw4ugbqd"/>`,
		"fallback": "material-symbols:backlight-high-outline",
	});
}

export default Component;
