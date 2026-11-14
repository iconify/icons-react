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
		"content": `<style>.b0lcb0bhj {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M6.125 1.75h11.75q3.375 0 3.375 3.375v8.25q0 3.375-3.375 3.375H6.125q-3.375 0-3.375-3.375v-8.25q0-3.375 3.375-3.375m6.625 3.5q0-.074-.014-.146q-.015-.073-.043-.141t-.069-.13q-.041-.061-.094-.113q-.052-.053-.113-.094t-.13-.069t-.141-.043T12 4.5t-.146.014q-.073.015-.141.043t-.13.069t-.113.094q-.053.052-.094.113t-.069.13t-.043.141t-.014.146v.792q-3 .354-3 3.708q0 3.75 3.75 3.75t3.75-3.75q0-3.354-3-3.708zm10 13.75q0-.074-.014-.146q-.015-.073-.043-.141t-.069-.13q-.041-.061-.094-.113q-.052-.053-.113-.094t-.13-.069t-.141-.043T22 18.25H2q-.074 0-.146.014q-.073.015-.141.043t-.13.069t-.113.094q-.053.052-.094.113t-.069.13t-.043.141T1.25 19t.014.146q.015.073.043.141t.069.13q.041.061.094.113q.052.053.113.094t.13.069q.068.028.141.043T2 19.75h20q.074 0 .146-.014q.073-.015.141-.043t.13-.069q.061-.041.113-.094q.053-.052.094-.113t.069-.13t.043-.141t.014-.146");
}
</style><path class="b0lcb0bhj"/>`,
		"fallback": "uix-solid:assessment-test",
	});
}

export default Component;
