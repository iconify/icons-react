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
		"content": `<style>.zarxyhb0p {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M6.378 14.25L7.75 6.928Q7.786 4.25 10.5 4.25h3q2.714 0 2.75 2.678l1.372 7.322h.878q2.25 0 2.25 2.25q0 1.803-1.445 2.161q1.042.758 1.819 1.923q.041.061.069.13q.028.068.043.14t.014.147q0 .074-.015.146q-.014.073-.042.141t-.07.129t-.093.114q-.053.052-.114.093t-.13.069t-.14.043q-.073.014-.147.014t-.146-.015q-.073-.014-.141-.042t-.129-.07t-.114-.093q-.052-.053-.093-.114q-1.777-2.666-5.376-2.666h-9q-2.25 0-2.25-2.25q0-.932.659-1.591T5.5 14.25zm1.526 0h8.192l-1.333-7.112Q14.75 7.07 14.75 7q0-1.25-1.25-1.25h-3Q9.25 5.75 9.25 7q0 .07-.013.138z");
}
</style><path class="zarxyhb0p"/>`,
		"fallback": "uix-solid:coffee-pod",
	});
}

export default Component;
