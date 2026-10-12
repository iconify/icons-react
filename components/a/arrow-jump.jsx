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
		"content": `<style>.mg1u0v_sb {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4 4q4 13 8 13q3 0 5-6m-4 2l4-2l2 4M3 20h18");
}
</style><path class="mg1u0v_sb"/>`,
		"fallback": "iconoven:arrow-jump",
	});
}

export default Component;
