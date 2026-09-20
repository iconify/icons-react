import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.wy7mt8z8j {
  fill: currentColor;
  d: path("M116 120a12 12 0 1 1 12 12a12 12 0 0 1-12-12m-32 12a12 12 0 1 0-12-12a12 12 0 0 0 12 12m88 0a12 12 0 1 0-12-12a12 12 0 0 0 12 12m60-76v128a16 16 0 0 1-16 16h-60.43l-13.68 23.94a16 16 0 0 1-27.78 0L100.43 200H40a16 16 0 0 1-16-16V56a16 16 0 0 1 16-16h176a16 16 0 0 1 16 16m-16 0H40v128h65.07a8 8 0 0 1 7 4l16 28l16-28a8 8 0 0 1 7-4H216Z");
}
</style><path class="wy7mt8z8j"/>`,
		"fallback": "ph:chat-centered-dots",
	});
}

export default Component;
