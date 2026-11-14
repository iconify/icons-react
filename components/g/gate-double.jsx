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
		"content": `<style>.exn2zpisn {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 4v16.5M21 4v16.5M6 6q3 3.5 6 3.5T18 6v12H6Zm6 3.5V18m-6-4h12");
}
</style><path class="exn2zpisn"/>`,
		"fallback": "uix:gate-double",
	});
}

export default Component;
