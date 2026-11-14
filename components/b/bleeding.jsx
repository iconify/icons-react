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
		"content": `<style>.e531m7szs {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M9.493 2.447q-.024.022-.046.046Q3.75 8.708 3.75 13q0 2.589 1.831 4.419Q7.411 19.25 10 19.25t4.419-1.831q.533-.532.91-1.128q-.079.372-.079.709q0 2.75 2.75 2.75T20.75 17q0-1.763-2.164-4.469q-.046-.057-.103-.105t-.121-.083t-.135-.058t-.144-.03q-.074-.009-.147-.002q-.074.006-.145.027t-.136.054t-.124.08q-.065.052-.117.117q-.808 1.011-1.314 1.889q.15-.679.15-1.42q0-4.292-5.697-10.507q-.05-.054-.11-.098q-.059-.044-.126-.075t-.139-.049t-.145-.02q-.074-.004-.147.008q-.073.011-.143.036q-.069.026-.132.064t-.118.088");
}
</style><path class="e531m7szs"/>`,
		"fallback": "uix-solid:bleeding",
	});
}

export default Component;
