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
		"content": `<style>.hkzec966y {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M3.25 10.5q0-4.75 2.5-4.75q1.215 0 1.925 1.621q.575 1.315.575 3.129q0 .391-.017.75h1.455q.498-2.5 2.312-2.5q1.215 0 1.925 1.621q.181.415.305.879h1.537q-.017-.359-.017-.75q0-4.75 2.5-4.75t2.5 4.75q0 .391-.017.75h.767q.074 0 .146.014q.073.015.141.043t.13.069q.061.041.113.094q.053.052.094.113t.069.13t.043.141t.014.146t-.014.146q-.015.073-.043.141t-.069.13t-.094.113q-.052.053-.113.094t-.13.069t-.141.043t-.146.014h-.938q-.498 2.5-2.312 2.5t-2.312-2.5h-1.464q.026.364.026.75q0 1.814-.575 3.129q-.71 1.621-1.925 1.621q-2.5 0-2.5-4.75q0-.391.017-.75H8.062q-.498 2.5-2.312 2.5t-2.312-2.5H2.5q-.074 0-.146-.014q-.073-.015-.141-.043t-.13-.069t-.113-.094q-.053-.052-.094-.113t-.069-.13t-.043-.141Q1.75 12.074 1.75 12t.014-.146q.015-.073.043-.141t.069-.13t.094-.113q.052-.053.113-.094t.13-.069t.141-.043t.146-.014h.767q-.017-.359-.017-.75");
}
</style><path class="hkzec966y"/>`,
		"fallback": "uix-solid:camshaft",
	});
}

export default Component;
