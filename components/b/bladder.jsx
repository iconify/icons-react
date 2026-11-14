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
		"content": `<style>.q3epmtbem {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M8 7.438V2.5q0-.074-.014-.146q-.015-.073-.043-.141t-.069-.13t-.094-.113q-.052-.053-.113-.094t-.13-.069t-.141-.043q-.072-.014-.146-.014t-.146.014q-.073.015-.141.043t-.13.069q-.061.041-.113.094q-.053.052-.094.113t-.069.13t-.043.141T6.5 2.5v6.272Q4.75 10.774 4.75 13.5q0 3.003 2.123 5.127q1.854 1.853 4.377 2.089v1.034q0 .074.014.146q.015.073.043.141t.069.13q.041.061.094.113q.052.053.113.094t.13.069t.141.043t.146.014t.146-.014q.073-.015.141-.043t.13-.069t.113-.094q.053-.052.094-.113t.069-.13t.043-.141t.014-.146v-1.034q2.523-.236 4.377-2.089q2.123-2.124 2.123-5.127q0-2.726-1.75-4.728V2.5q0-.074-.014-.146q-.015-.073-.043-.141t-.069-.13t-.094-.113q-.052-.053-.113-.094t-.13-.069t-.141-.043t-.146-.014t-.146.014q-.073.015-.141.043t-.13.069q-.061.041-.113.094q-.053.052-.094.113t-.069.13t-.043.141T16 2.5v4.938Q14.246 6.25 12 6.25T8 7.438");
}
</style><path class="q3epmtbem"/>`,
		"fallback": "uix-solid:bladder",
	});
}

export default Component;
