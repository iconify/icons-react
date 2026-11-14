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
		"content": `<style>.g7bkxtm6r {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M9.188 4.188Q8.25 5.125 8.25 7q0 3.75 3.75 3.75T15.75 7T12 3.25q-1.875 0-2.812.938M4.5 7.25q-2.75 0-2.75 2.75t2.75 2.75T7.25 10T4.5 7.25M16.75 10q0-2.75 2.75-2.75T22.25 10t-2.75 2.75T16.75 10M2.25 20q0-6.75 9.75-6.75T21.75 20q0 .074-.014.146q-.015.073-.043.141t-.069.13q-.041.061-.094.113q-.052.053-.113.094t-.13.069t-.141.043t-.146.014t-.146-.014q-.073-.015-.141-.043t-.13-.069q-.061-.041-.113-.094q-.053-.052-.094-.113t-.069-.13t-.043-.141T20.25 20q0-5.25-8.25-5.25T3.75 20q0 .074-.014.146q-.015.073-.043.141t-.069.13q-.041.061-.094.113q-.052.053-.113.094t-.13.069t-.141.043T3 20.75t-.146-.014q-.073-.015-.141-.043t-.13-.069t-.113-.094q-.053-.052-.094-.113t-.069-.13t-.043-.141T2.25 20");
}
</style><path class="g7bkxtm6r"/>`,
		"fallback": "uix-solid:group",
	});
}

export default Component;
