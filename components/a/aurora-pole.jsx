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
		"content": `<style>.orlfr5o3u {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 8.5c3.75-4.75 14.75-4.75 18.5 0M6 20.5h12m-13-9c2.33-2 4.67-2 7 0s4.67 2 7 0M7 15.75c1.67-1.5 3.33-1.5 5 0s3.33 1.5 5 0");
}
</style><path class="orlfr5o3u"/>`,
		"fallback": "iconoven:aurora-pole",
	});
}

export default Component;
