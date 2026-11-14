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
		"content": `<style>.dxi24bb2t {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M7 4.75h10q2.75 0 2.75 2.75q0 2.376-2.054 2.699l.053.052q1.501 1.501 1.501 3.624v2.25q0 2.123-1.501 3.624t-3.624 1.501h-4.25q-2.123 0-3.624-1.501T4.75 16.125v-2.25q0-2.123 1.501-3.624l.053-.052Q4.25 9.876 4.25 7.5q0-2.75 2.75-2.75m8 9.5H9q-.074 0-.146.014q-.073.015-.141.043t-.13.069t-.113.094q-.053.052-.094.113t-.069.13t-.043.141T8.25 15t.014.146q.015.073.043.141t.069.13t.094.113q.052.053.113.094t.13.069t.141.043t.146.014h6q.074 0 .146-.014q.073-.015.141-.043t.13-.069t.113-.094q.053-.052.094-.113t.069-.13t.043-.141t.014-.146t-.014-.146q-.015-.073-.043-.141t-.069-.13t-.094-.113q-.052-.053-.113-.094t-.13-.069t-.141-.043T15 14.25");
}
</style><path class="dxi24bb2t"/>`,
		"fallback": "uix-solid:cosmetic-jar",
	});
}

export default Component;
