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
		"content": `<style>.jxnm7natk {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M13.5 8.75q-.149 0-.287-.057t-.243-.163q-.106-.105-.163-.243T12.75 8V4.5q0-.074.014-.146q.015-.073.043-.141t.069-.13q.041-.061.094-.113q.052-.053.113-.094t.13-.069t.141-.043q.072-.014.146-.014t.146.014q.073.015.141.043t.13.069t.113.094q.053.052.094.113t.069.13q.028.068.043.141t.014.146v1.689l4.22-4.219q.052-.053.113-.094t.13-.069t.141-.043T19 1.75t.146.014q.073.015.141.043t.13.069q.061.041.113.094q.106.105.163.243t.057.287t-.057.287t-.163.243l-4.219 4.22H17q.074 0 .146.014q.073.015.141.043t.13.069q.061.041.113.094q.053.052.094.113t.069.13t.043.141t.014.146t-.014.146q-.015.073-.043.141t-.069.13t-.094.113q-.052.053-.113.094t-.13.069t-.141.043T17 8.75zM2.25 11q0-2.75 2.75-2.75h4.5q.149 0 .287.057t.243.163l1.781 1.78H19q2.75 0 2.75 2.75v6.5q0 2.75-2.75 2.75H5q-2.75 0-2.75-2.75z");
}
</style><path class="jxnm7natk"/>`,
		"fallback": "uix-solid:current-file",
	});
}

export default Component;
