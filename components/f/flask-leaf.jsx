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
		"content": `<style>.iktgjfasb {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9.5 9.5V12l-4.25 6.75Q4.5 21 6.75 21h10.5q2.25 0 1.5-2.25L14.5 12V9.5m-2.5 0V5.75M12 6c0-2.5 2.5-3.5 5.5-3.25C17.5 5.25 15 6.5 12 6");
}
</style><path class="iktgjfasb"/>`,
		"fallback": "uix:flask-leaf",
	});
}

export default Component;
