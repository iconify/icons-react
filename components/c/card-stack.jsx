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
		"content": `<style>.zgmwxib0k {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M8.5 8.75H7q-.75 0-.75.75v.75h6.625q3.375 0 3.375 3.375V14q0-.074-.014-.146q-.015-.073-.043-.141t-.069-.13t-.094-.113q-.052-.053-.113-.094t-.13-.069t-.141-.043t-.146-.014h-13q-.074 0-.146.014q-.073.015-.141.043t-.13.069t-.113.094q-.053.052-.094.113t-.069.13t-.043.141q-.014.072-.014.146v-.375q0-3.182 3-3.364V9.5q0-2.25 2.25-2.25h.75V6.5q0-2.25 2.25-2.25h10q2.25 0 2.25 2.25v6q0 .932-.659 1.591T20 14.75h-.75V17q0 .074-.014.146q-.015.073-.043.141t-.069.13q-.041.061-.094.113q-.052.053-.113.094t-.13.069t-.141.043t-.146.014h-2.261q-.182 3-3.364 3h-7.75q-3.375 0-3.375-3.375V14q0 .074.014.146q.015.073.043.141t.069.13t.094.113q.052.053.113.094t.13.069t.141.043t.146.014h13q.074 0 .146-.014q.073-.015.141-.043t.13-.069t.113-.094q.053-.052.094-.113t.069-.13t.043-.141t.014-.146v2.25h1.5V9.5q0-.75-.75-.75zm10.75 4.5H20q.75 0 .75-.75v-6q0-.75-.75-.75H10q-.75 0-.75.75v.75H17q2.25 0 2.25 2.25z");
}
</style><path class="zgmwxib0k"/>`,
		"fallback": "uix-solid:card-stack",
	});
}

export default Component;
