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
		"content": `<style>.kbed_4b0y {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M1.75 12q0-4.246 3.002-7.248T12 1.75t7.248 3.002T22.25 12t-3.002 7.248T12 22.25t-7.248-3.002T1.75 12m12.343-5.75H9.907q-.998 0-1.668.74t-.57 1.734l.7 6.999q.202 2.026 2.238 2.027h2.786q2.036-.001 2.238-2.026l.7-7q.099-.994-.57-1.734q-.67-.74-1.668-.74");
}
</style><path class="kbed_4b0y"/>`,
		"fallback": "uix-solid:drink-token",
	});
}

export default Component;
