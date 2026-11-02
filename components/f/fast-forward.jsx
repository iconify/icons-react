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
		"content": `<style>.wxhfi6btr {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("m5.256 7.204l6 3.5a1.5 1.5 0 0 1 0 2.592l-6 3.5A1.5 1.5 0 0 1 3 15.5v-7a1.5 1.5 0 0 1 2.256-1.296m9 0l6 3.5a1.5 1.5 0 0 1 0 2.592l-6 3.5A1.5 1.5 0 0 1 12 15.5v-7a1.5 1.5 0 0 1 2.256-1.296");
}
</style><path class="wxhfi6btr"/>`,
		"fallback": "coolicons:fast-forward",
	});
}

export default Component;
