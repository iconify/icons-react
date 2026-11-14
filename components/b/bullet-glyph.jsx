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
		"content": `<style>.nsjodwpvm {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M4.495 8.995Q3.25 10.24 3.25 12t1.245 3.005T7.5 16.25t3.005-1.245T11.75 12t-1.245-3.005T7.5 7.75T4.495 8.995M14 11.25h6.5q.074 0 .146.014q.073.015.141.043t.13.069q.061.041.113.094q.053.052.094.113t.069.13t.043.141t.014.146t-.014.146q-.015.073-.043.141t-.069.13t-.094.113q-.052.053-.113.094t-.13.069t-.141.043t-.146.014H14q-.074 0-.146-.014q-.073-.015-.141-.043t-.13-.069t-.113-.094q-.053-.052-.094-.113t-.069-.13t-.043-.141T13.25 12t.014-.146q.015-.073.043-.141t.069-.13t.094-.113q.052-.053.113-.094t.13-.069t.141-.043t.146-.014");
}
</style><path class="nsjodwpvm"/>`,
		"fallback": "uix-solid:bullet-glyph",
	});
}

export default Component;
