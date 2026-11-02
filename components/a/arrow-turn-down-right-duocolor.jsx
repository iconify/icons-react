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
		"content": `<style>.nr4ysbxhe {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("m12 21l5-5l-5-5M7 3v11a2 2 0 0 0 2 2h8");
}
</style><path class="nr4ysbxhe"/>`,
		"fallback": "coolicons:arrow-turn-down-right-duocolor",
	});
}

export default Component;
