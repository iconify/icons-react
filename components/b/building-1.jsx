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
		"content": `<style>.e6ytk5vvj {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M3 20h18M9 20v-6.039a2 2 0 0 1 .75-1.561l3-2.4a2 2 0 0 1 2.5 0l3 2.4a2 2 0 0 1 .75 1.56V20m-7-9.4V4H7a2 2 0 0 0-2 2v14");
}
</style><path class="e6ytk5vvj"/>`,
		"fallback": "coolicons:building-1",
	});
}

export default Component;
