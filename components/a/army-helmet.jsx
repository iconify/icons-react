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
		"content": `<style>.lgt0jsbvg {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M5.043 6.652Q2.25 10.089 2.25 15.5q0 .074.014.146q.015.073.043.141t.069.13t.094.113q.052.053.113.094t.13.069t.141.043t.146.014h3.957q1.785 5 7.543 5q.074 0 .146-.014q.073-.015.141-.043t.13-.069t.113-.094q.053-.052.094-.113t.069-.13t.043-.141t.014-.146t-.014-.146q-.015-.073-.043-.141t-.069-.13q-.041-.061-.094-.113q-.052-.053-.113-.094t-.13-.069t-.141-.043t-.146-.014q-4.375 0-5.927-3.5H21.5q.074 0 .146-.014q.073-.015.141-.043t.13-.069q.061-.041.113-.094q.053-.052.094-.113t.069-.13t.043-.141t.014-.146v-2q0-.149-.057-.287t-.163-.243l-1.785-1.786q-.101-3.185-2.265-5.452Q15.611 3.25 12 3.25q-4.193 0-6.957 3.402");
}
</style><path class="lgt0jsbvg"/>`,
		"fallback": "uix-solid:army-helmet",
	});
}

export default Component;
