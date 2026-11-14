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
		"content": `<style>.sh8beibaa {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M11 1.75H6q-.074 0-.146.014q-.073.015-.141.043t-.13.069q-.061.041-.113.094q-.053.052-.094.113t-.069.13t-.043.141t-.014.146t.014.146q.015.073.043.141t.069.13t.094.113q.052.053.113.094t.13.069t.141.043q.072.014.146.014h5q.074 0 .146-.014q.073-.015.141-.043t.13-.069t.113-.094q.053-.052.094-.113t.069-.13t.043-.141t.014-.146t-.014-.146q-.015-.073-.043-.141t-.069-.13t-.094-.113q-.052-.053-.113-.094t-.13-.069t-.141-.043Q11.074 1.75 11 1.75m4.375 2.75h-6.75q-1.398 0-2.386.989q-.989.988-.989 2.386v10.75q0 1.398.989 2.386q.988.989 2.386.989h6.75q1.398 0 2.386-.989q.989-.988.989-2.386V7.875q0-3.375-3.375-3.375");
}
</style><path class="sh8beibaa"/>`,
		"fallback": "uix-solid:artboard-portrait",
	});
}

export default Component;
