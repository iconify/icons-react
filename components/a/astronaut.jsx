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
		"content": `<style>.pdh9r0bpo {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M4.25 9.5q0-3.21 2.27-5.48T12 1.75t5.48 2.27t2.27 5.48t-2.27 5.48q-.346.346-.713.639q3.983 2.075 3.983 5.881q0 .074-.014.146q-.015.073-.043.141t-.069.13q-.041.061-.094.113q-.052.053-.113.094t-.13.069t-.141.043t-.146.014t-.146-.014q-.073-.015-.141-.043t-.13-.069q-.061-.041-.113-.094q-.053-.052-.094-.113t-.069-.13t-.043-.141t-.014-.146q0-3.231-4-4.938q-1.482.688-3.25.688t-3.25-.688q-4 1.707-4 4.938q0 .074-.014.146q-.015.073-.043.141t-.069.13q-.041.061-.094.113q-.052.053-.113.094t-.13.069t-.141.043T4 22.25t-.146-.014q-.073-.015-.141-.043t-.13-.069t-.113-.094q-.053-.052-.094-.113t-.069-.13t-.043-.141t-.014-.146q0-3.806 3.983-5.881q-.367-.293-.713-.639q-2.27-2.27-2.27-5.48M10.5 6Q7.25 6 7.25 9.25q0 1.346.952 2.298t2.298.952h3q1.346 0 2.298-.952t.952-2.298Q16.75 6 13.5 6z");
}
</style><path class="pdh9r0bpo"/>`,
		"fallback": "uix-solid:astronaut",
	});
}

export default Component;
