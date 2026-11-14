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
		"content": `<style>.opbx48grv {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M4.25 12.5v.489q-.573.238-1.048.713q-.952.952-.952 2.298v2q0 3.25 3.25 3.25T8.75 18v-2q0-3.122-3-3.245V12.5q0-2.589 1.831-4.419Q9.411 6.25 12 6.25t4.419 1.831T18.25 12.5v.255q-3 .123-3 3.245v2q0 3.25 3.25 3.25q1.346 0 2.298-.952T21.75 18v-2q0-1.346-.952-2.298q-.475-.475-1.048-.713V12.5q0-3.21-2.27-5.48T12 4.75T6.52 7.02T4.25 12.5m7.25 3.939l1.97-1.969q.052-.053.113-.094t.13-.069t.141-.043t.146-.014t.146.014q.073.015.141.043t.13.069t.113.094q.053.052.094.113t.069.13t.043.141t.014.146t-.014.146q-.015.073-.043.141t-.069.13t-.094.113l-2.5 2.5q-.052.053-.113.094t-.13.069t-.141.043t-.146.014t-.146-.014q-.073-.015-.141-.043t-.13-.069t-.113-.094l-1.5-1.5q-.053-.052-.094-.113t-.069-.13t-.043-.141T9.25 16t.014-.146q.015-.073.043-.141t.069-.13t.094-.113q.052-.053.113-.094t.13-.069t.141-.043t.146-.014t.146.014q.073.015.141.043t.13.069t.113.094z");
}
</style><path class="opbx48grv"/>`,
		"fallback": "uix-solid:headphones-check",
	});
}

export default Component;
