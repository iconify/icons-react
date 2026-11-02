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
		"content": `<style>.smu_5cb1e {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M13 7L9 3L5 7m4-4v16a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-8");
}
</style><path class="smu_5cb1e"/>`,
		"fallback": "coolicons:arrow-u-turn-left-up",
	});
}

export default Component;
