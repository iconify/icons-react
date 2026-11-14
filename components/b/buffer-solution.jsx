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
		"content": `<style>.gana50bia {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M6.5 2.25h-2q-.074 0-.146.014q-.073.015-.141.043t-.13.069q-.061.041-.113.094q-.053.052-.094.113t-.069.13t-.043.141Q3.75 2.926 3.75 3t.014.146q.015.073.043.141t.069.13t.094.113q.052.053.113.094t.13.069t.141.043t.146.014h1.25V18.5q0 1.346.952 2.298T9 21.75h6q1.346 0 2.298-.952t.952-2.298V3.75h1.25q.074 0 .146-.014q.073-.015.141-.043t.13-.069q.061-.041.113-.094q.053-.052.094-.113t.069-.13t.043-.141T20.25 3t-.014-.146q-.015-.073-.043-.141t-.069-.13t-.094-.113q-.052-.053-.113-.094t-.13-.069t-.141-.043t-.146-.014h-2q-.074 0-.146.014q-.073.015-.141.043t-.13.069q-.061.041-.113.094q-.053.052-.094.113t-.069.13t-.043.141T16.75 3v8.25h-9.5V3q0-.074-.014-.146q-.015-.073-.043-.141t-.069-.13t-.094-.113q-.052-.053-.113-.094t-.13-.069t-.141-.043Q6.574 2.25 6.5 2.25m.75 10.5h9.5v5.75q0 .725-.513 1.237q-.512.513-1.237.513H9q-.725 0-1.237-.513q-.513-.512-.513-1.237z");
}
</style><path class="gana50bia"/>`,
		"fallback": "uix-solid:buffer-solution",
	});
}

export default Component;
