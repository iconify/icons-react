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
		"content": `<style>.hb3n-4b3j {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("m17 19l4-4l-4-4m4 4H7a4 4 0 0 1-4-4V9a4 4 0 0 1 4-4h6");
}
</style><path class="hb3n-4b3j"/>`,
		"fallback": "coolicons:arrow-u-turn-down-right-duocolor-round",
	});
}

export default Component;
