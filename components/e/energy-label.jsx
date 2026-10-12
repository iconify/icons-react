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
		"content": `<style>.bxhcxj41s {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.35 3h4.3q.6 0 1.02.42l.53.53q.43.43 0 .85l-.53.53q-.42.42-1.02.42h-4.3q-.6 0-.6-.6V3.6q0-.6.6-.6m0 5h6.3q.6 0 1.02.42l.53.53q.43.43 0 .85l-.53.53q-.42.42-1.02.42h-6.3q-.6 0-.6-.6V8.6q0-.6.6-.6m0 5h8.3q.6 0 1.02.42l.53.53q.43.43 0 .85l-.53.53q-.42.42-1.02.42h-8.3q-.6 0-.6-.6V13.6q0-.6.6-.6m0 5h10.3q.6 0 1.02.42l.53.53q.43.43 0 .85l-.53.53q-.42.42-1.02.42H3.35q-.6 0-.6-.6V18.6q0-.6.6-.6M14.8 8.87l1.65-1.49q.55-.5 1.3-.5h2.75q.75 0 .75.75v3.5q0 .75-.75.75h-2.75q-.75 0-1.3-.51L14.8 9.88q-.55-.5 0-1.01");
}
</style><path class="bxhcxj41s"/>`,
		"fallback": "iconoven:energy-label",
	});
}

export default Component;
