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
		"content": `<style>.ep6q_wb2x {
  fill: currentColor;
  d: path("m7 10l5 5l5-5z");
}
</style><path class="ep6q_wb2x"/>`,
		"fallback": "ic:baseline-arrow-drop-down",
	});
}

export default Component;
