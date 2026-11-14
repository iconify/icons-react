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
		"content": `<style>.xr953dbiu {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M4 10.338V10q0-3.314 2.343-5.657T12 2t5.657 2.343T20 10v.304q2.25.348 2.25 2.946v3.5q0 3-3 3t-3-3v-3.5q0-2.598 2.25-2.946V10q0-2.692-1.904-4.596T12 3.5T7.404 5.404T5.5 10v.304q2.25.348 2.25 2.946v3.5q0 3-3 3t-3-3v-3.5q0-1.243.879-2.121q.6-.601 1.371-.791");
}
</style><path class="xr953dbiu"/>`,
		"fallback": "uix-solid:ear-muffs",
	});
}

export default Component;
