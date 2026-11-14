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
		"content": `<style>.d-qz1cb8q {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M6 2.25h12q1.76 0 3.005 1.245T22.25 6.5V11q0 1.76-1.245 3.005q-1.155 1.156-2.755 1.239V21.5q0 .074-.014.146q-.015.073-.043.141t-.069.13q-.041.061-.094.113q-.052.053-.113.094t-.13.069t-.141.043t-.146.014q-.074 0-.146-.014q-.073-.015-.141-.043t-.13-.069q-.061-.041-.113-.094q-.053-.052-.094-.113t-.069-.13t-.043-.141t-.014-.146v-6.25h-9.5v6.25q0 .074-.014.146q-.015.073-.043.141t-.069.13q-.041.061-.094.113q-.052.053-.113.094t-.13.069t-.141.043t-.146.014t-.146-.014q-.073-.015-.141-.043t-.13-.069q-.061-.041-.113-.094q-.053-.052-.094-.113t-.069-.13t-.043-.141t-.014-.146v-6.256q-1.6-.083-2.755-1.239Q1.75 12.76 1.75 11V6.5q0-1.76 1.245-3.005T6 2.25m6 2.5q-4 0-4 4t4 4t4-4q0-1.657-1.172-2.828Q13.657 4.75 12 4.75");
}
</style><path class="d-qz1cb8q"/>`,
		"fallback": "uix-solid:coming-soon-sign",
	});
}

export default Component;
