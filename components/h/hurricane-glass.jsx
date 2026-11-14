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
		"content": `<style>.p7ytp3d0j {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M8 1.75h8q.074 0 .146.014q.073.015.141.043t.13.069q.061.041.113.094q.053.052.094.113t.069.13t.043.141t.014.146q0 1.442-.716 3.582Q15.5 7.678 15.5 8.5q0 .676.833 1.954q1.417 2.171 1.417 4.046q0 3.963-5 4.231v2.019H15q.074 0 .146.014q.073.015.141.043t.13.069t.113.094q.053.052.094.113t.069.13t.043.141t.014.146t-.014.146q-.015.073-.043.141t-.069.13q-.041.061-.094.113q-.052.053-.113.094t-.13.069t-.141.043t-.146.014H9q-.074 0-.146-.014q-.073-.015-.141-.043t-.13-.069t-.113-.094q-.053-.052-.094-.113t-.069-.13t-.043-.141t-.014-.146t.014-.146q.015-.073.043-.141t.069-.13q.041-.061.094-.113q.052-.053.113-.094t.13-.069t.141-.043T9 20.75h2.25v-2.019q-5-.268-5-4.231q0-1.875 1.417-4.046Q8.5 9.176 8.5 8.5q0-.822-.534-2.418Q7.25 3.942 7.25 2.5q0-.074.014-.146q.015-.073.043-.141t.069-.13t.094-.113q.052-.053.113-.094t.13-.069t.141-.043Q7.926 1.75 8 1.75");
}
</style><path class="p7ytp3d0j"/>`,
		"fallback": "uix-solid:hurricane-glass",
	});
}

export default Component;
