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
		"content": `<style>.vgi81wodt {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M4.081 5.081Q2.25 6.911 2.25 9.5t1.831 4.419T8.5 15.75q1.655 0 3-.748q1.345.748 3 .748q2.589 0 4.419-1.831q1.831-1.83 1.831-4.419t-1.831-4.419Q17.089 3.25 14.5 3.25q-1.655 0-3 .748q-1.345-.748-3-.748q-2.589 0-4.419 1.831M15.28 17.47l1.47 1.469l3.72-3.719q.052-.053.113-.094t.13-.069t.141-.043T21 15t.146.014q.073.015.141.043t.13.069q.061.041.113.094q.106.105.163.243t.057.287t-.057.287t-.163.243l-4.25 4.25q-.052.053-.113.094t-.13.069t-.141.043t-.146.014q-.074 0-.146-.014q-.073-.015-.141-.043t-.13-.069q-.061-.041-.113-.094l-2-2q-.053-.052-.094-.113t-.069-.13t-.043-.141T14 18t.014-.146q.015-.073.043-.141t.069-.13q.041-.061.094-.113q.105-.106.243-.163t.287-.057t.287.057t.243.163");
}
</style><path class="vgi81wodt"/>`,
		"fallback": "uix-solid:colour-match",
	});
}

export default Component;
