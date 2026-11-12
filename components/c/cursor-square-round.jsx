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
		"content": `<style>.bqyjmsb1o {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M3 5a2 2 0 1 1 4 0a2 2 0 0 1-4 0m7 5l11 4l-5 2l-2 5z");
}
</style><path class="bqyjmsb1o"/>`,
		"fallback": "coolicons:cursor-square-round",
	});
}

export default Component;
