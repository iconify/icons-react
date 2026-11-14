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
		"content": `<style>.v_u0r0bzy {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M16.25 5q0-2.75 2.75-2.75T21.75 5T19 7.75T16.25 5M11.5 7.75h4q.149 0 .287.057t.243.163q.106.105.163.243t.057.287v4q0 .074-.014.146q-.015.073-.043.141t-.069.13t-.094.113q-.052.053-.113.094t-.13.069t-.141.043t-.146.014t-.146-.014q-.073-.015-.141-.043t-.13-.069t-.113-.094q-.053-.052-.094-.113t-.069-.13t-.043-.141t-.014-.146v-2.189L9.03 16.03q-.105.106-.243.163t-.287.057t-.287-.057t-.243-.163q-.053-.052-.094-.113t-.069-.13t-.043-.141t-.014-.146t.014-.146q.015-.073.043-.141t.069-.13t.094-.113l5.719-5.72H11.5q-.074 0-.146-.014q-.073-.015-.141-.043t-.13-.069t-.113-.094q-.053-.052-.094-.113t-.069-.13t-.043-.141t-.014-.146t.014-.146q.015-.073.043-.141t.069-.13t.094-.113q.052-.053.113-.094t.13-.069t.141-.043t.146-.014M5 16.25q-2.75 0-2.75 2.75T5 21.75T7.75 19T5 16.25");
}
</style><path class="v_u0r0bzy"/>`,
		"fallback": "uix-solid:displacement",
	});
}

export default Component;
