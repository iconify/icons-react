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
		"content": `<style>.c8otpobvn {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 20.75V9.5q0-.5.5-.5h4.5q.5 0 .5.5V18q0 .5.5.5h6.5q.5 0 .5-.5V9.5q0-.5.5-.5h4.5q.5 0 .5.5v11.25q0 .5-.5.5H3.25q-.5 0-.5-.5m2-8.25h3.5m-3.5 3.25h3.5m7.5-3.25h3.5m-3.5 3.25h3.5m-11-7a3.75 3.75 0 0 1 7.5 0ZM12 5v3.75");
}
</style><path class="c8otpobvn"/>`,
		"fallback": "iconoven:atrium",
	});
}

export default Component;
