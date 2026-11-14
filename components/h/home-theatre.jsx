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
		"content": `<style>.o9dtvlb2v {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M18 1.75H6q-1.76 0-3.005 1.245T1.75 6t1.245 3.005T6 10.25h5.25v1.5h-.75q-.074 0-.146.014q-.073.015-.141.043t-.13.069t-.113.094q-.053.052-.094.113t-.069.13t-.043.141t-.014.146t.014.146q.015.073.043.141t.069.13t.094.113q.052.053.113.094t.13.069t.141.043t.146.014h3q.074 0 .146-.014q.073-.015.141-.043t.13-.069t.113-.094q.053-.052.094-.113t.069-.13t.043-.141t.014-.146t-.014-.146q-.015-.073-.043-.141t-.069-.13t-.094-.113q-.052-.053-.113-.094t-.13-.069t-.141-.043t-.146-.014h-.75v-1.5H18q1.76 0 3.005-1.245T22.25 6t-1.245-3.005T18 1.75M5.125 11.5h.75q3.375 0 3.375 3.375v4q0 3.375-3.375 3.375h-.75q-3.375 0-3.375-3.375v-4q0-3.375 3.375-3.375m13.75 0h-.75q-3.375 0-3.375 3.375v4q0 3.375 3.375 3.375h.75q3.375 0 3.375-3.375v-4q0-3.375-3.375-3.375M5.5 15.5q-1.75 0-1.75 1.75T5.5 19t1.75-1.75T5.5 15.5m11.25 1.75q0-1.75 1.75-1.75t1.75 1.75T18.5 19t-1.75-1.75");
}
</style><path class="o9dtvlb2v"/>`,
		"fallback": "uix-solid:home-theatre",
	});
}

export default Component;
