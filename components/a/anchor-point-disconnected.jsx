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
		"content": `<style>.q1t5obcnp {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M15 5.5Q15 2 18.5 2T22 5.5T18.5 9q-1.22 0-2.014-.425L13.28 11.78q-.052.053-.113.094t-.13.069t-.141.043t-.146.014t-.146-.014q-.073-.015-.141-.043t-.13-.069t-.113-.094q-.053-.052-.094-.113t-.069-.13t-.043-.141T12 11.25t.014-.146q.015-.073.043-.141t.069-.13t.094-.113l3.205-3.206Q15 6.72 15 5.5m-9.5 7.75h3q2.25 0 2.25 2.25v3q0 2.25-2.25 2.25h-3q-2.25 0-2.25-2.25v-3q0-2.25 2.25-2.25");
}
</style><path class="q1t5obcnp"/>`,
		"fallback": "uix-solid:anchor-point-disconnected",
	});
}

export default Component;
