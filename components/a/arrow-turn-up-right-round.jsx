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
		"content": `<style>.g46ojlx0v {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("m12 13l5-5l-5-5M7 21v-9a4 4 0 0 1 4-4h6");
}
</style><path class="g46ojlx0v"/>`,
		"fallback": "coolicons:arrow-turn-up-right-round",
	});
}

export default Component;
