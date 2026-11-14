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
		"content": `<style>.w5asg5bam {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.25 2.5h6A1.75 1.75 0 0 1 12 4.25v15.5a1.75 1.75 0 0 1-1.75 1.75h-6a1.75 1.75 0 0 1-1.75-1.75V4.25A1.75 1.75 0 0 1 4.25 2.5m3 0v19M2.5 8.75H12m-9.5 6.5H12M18.5 2.5v19M15 11h3.5M12 21.5h9.5");
}
</style><path class="w5asg5bam"/>`,
		"fallback": "uix:as-rs",
	});
}

export default Component;
