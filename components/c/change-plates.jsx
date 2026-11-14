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
		"content": `<style>.oz_nv74gv {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M8.75 3.25q2.5 0 2.5 2.5v5.5h1.25V8.5q0-2.25 2.25-2.25T17 8.5v2.75h4.5q.074 0 .146.014q.073.015.141.043t.13.069q.061.041.113.094q.053.052.094.113t.069.13t.043.141t.014.146t-.014.146q-.015.073-.043.141t-.069.13t-.094.113q-.052.053-.113.094t-.13.069t-.141.043t-.146.014H17v2.75q0 2.25-2.25 2.25T12.5 15.5v-2.75h-1.25v5.5q0 2.5-2.5 2.5t-2.5-2.5v-5.5H2.5q-.074 0-.146-.014q-.073-.015-.141-.043t-.13-.069t-.113-.094q-.053-.052-.094-.113t-.069-.13t-.043-.141Q1.75 12.074 1.75 12t.014-.146q.015-.073.043-.141t.069-.13t.094-.113q.052-.053.113-.094t.13-.069t.141-.043t.146-.014h3.75v-5.5q0-2.5 2.5-2.5");
}
</style><path class="oz_nv74gv"/>`,
		"fallback": "uix-solid:change-plates",
	});
}

export default Component;
