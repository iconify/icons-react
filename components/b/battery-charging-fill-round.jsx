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
		"content": `<style>.zy_bwvbqd {
  fill: currentColor;
  d: path("M6 6h9a4 4 0 0 1 4 4v4a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4v-4a4 4 0 0 1 4-4m5.414 5l.293-.293a.999.999 0 1 0-1.414-1.414l-2 2A1 1 0 0 0 9 13h.586l-.293.293a.999.999 0 1 0 1.414 1.414l2-2A1 1 0 0 0 12 11ZM22 10v4a1 1 0 0 1-2 0v-4a1 1 0 0 1 2 0");
}
</style><path class="zy_bwvbqd"/>`,
		"fallback": "coolicons:battery-charging-fill-round",
	});
}

export default Component;
