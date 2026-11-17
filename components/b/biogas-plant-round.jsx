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
		"content": `<style>.ai7-7wbkt {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M3 12v7a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-7a6.1 6.1 0 0 0-12 0m0 0h12M9.27 7.006A6.1 6.1 0 0 1 21 8m-8.653 0H21m0 0v7a2 2 0 0 1-2 2h-4");
}
</style><path class="ai7-7wbkt"/>`,
		"fallback": "coolicons:biogas-plant-round",
	});
}

export default Component;
