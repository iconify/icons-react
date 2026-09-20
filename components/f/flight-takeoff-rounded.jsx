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
		"content": `<style>.klxwqjbio {
  fill: currentColor;
  d: path("M19.604 11.306L6.489 14.773q-.535.137-1.013-.065t-.77-.662l-2.064-3.435q-.16-.252-.049-.544t.419-.36l.363-.092q.154-.05.295-.012q.142.038.265.136l2.419 2.057l4.135-1.079l-4.23-5.661q-.245-.333-.113-.734q.133-.4.552-.518l.333-.087q.179-.056.376-.015q.197.04.345.182l6.783 5.76l4.269-1.13q.569-.148 1.09.158q.52.307.668.876t-.12 1.09t-.838.668M4.5 20q-.213 0-.357-.143T4 19.5t.143-.357T4.5 19h15q.214 0 .357.143T20 19.5t-.143.357T19.5 20z");
}
</style><path class="klxwqjbio"/>`,
		"fallback": "material-symbols-light:flight-takeoff-rounded",
	});
}

export default Component;
