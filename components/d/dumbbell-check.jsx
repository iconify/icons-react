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
		"content": `<style>.gv06f_3tx {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M5 2.25q2.75 0 2.75 2.75v1.25h6.5V5q0-2.75 2.75-2.75T19.75 5v4q0 2.75-2.75 2.75T14.25 9V7.75h-6.5V9q0 2.75-2.75 2.75T2.25 9V5q0-2.75 2.75-2.75m10.28 15.22l1.47 1.469l3.72-3.719q.052-.053.113-.094t.13-.069t.141-.043T21 15t.146.014q.073.015.141.043t.13.069q.061.041.113.094q.106.105.163.243t.057.287t-.057.287t-.163.243l-4.25 4.25q-.052.053-.113.094t-.13.069t-.141.043t-.146.014q-.074 0-.146-.014q-.073-.015-.141-.043t-.13-.069q-.061-.041-.113-.094l-2-2q-.053-.052-.094-.113t-.069-.13t-.043-.141T14 18t.014-.146q.015-.073.043-.141t.069-.13q.041-.061.094-.113q.105-.106.243-.163t.287-.057t.287.057t.243.163");
}
</style><path class="gv06f_3tx"/>`,
		"fallback": "uix-solid:dumbbell-check",
	});
}

export default Component;
