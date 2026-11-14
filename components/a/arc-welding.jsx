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
		"content": `<style>.q_5rl75pz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 19.5h18m-9-4L19 4M4.5 15.5h2.75m-1-5.75l2 2m8.5 3.75h2.75");
}
</style><path class="q_5rl75pz"/>`,
		"fallback": "uix:arc-welding",
	});
}

export default Component;
