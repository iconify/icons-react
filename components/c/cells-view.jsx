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
		"content": `<style>.gt29lirmb {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M4.752 4.752Q1.75 7.754 1.75 12t3.002 7.248T12 22.25t7.248-3.002T22.25 12t-3.002-7.248T12 1.75T4.752 4.752M8.75 7.5Q8.75 5 12 5t3.25 2.5T12 10T8.75 7.5M8 11.75q1.272 0 2.198.648q1.052.737 1.052 1.852t-1.052 1.852q-.926.648-2.198.648q-3.25 0-3.25-2.5T8 11.75m4.75 2.5q0-2.5 3.25-2.5t3.25 2.5t-3.25 2.5t-3.25-2.5");
}
</style><path class="gt29lirmb"/>`,
		"fallback": "uix-solid:cells-view",
	});
}

export default Component;
