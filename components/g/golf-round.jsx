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
		"content": `<style>.qi1_q9o5q {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M10 11V7c0-1.838 2.162-2.919 4-2c1.648.824 1.648 3.176 0 4zm0 0v6m-4 2c0 1.105 1.79 2 4 2s4-.895 4-2");
}
</style><path class="qi1_q9o5q"/>`,
		"fallback": "coolicons:golf-round",
	});
}

export default Component;
