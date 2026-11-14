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
		"content": `<style>.a0uolrzbl {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("m6.667 6.395l3.75-3.067Q12 2.032 13.583 3.326l3.75 3.069q.917.749.917 1.934v2.421q0 1.036-.732 1.768t-1.768.732h-1.5v2h7.25q.074 0 .146.014q.073.015.141.043t.13.069q.061.041.113.094q.053.052.094.113t.069.13t.043.141t.014.146v4.5q0 .074-.014.146q-.015.073-.043.141t-.069.13q-.041.061-.094.113q-.052.053-.113.094t-.13.069t-.141.043t-.146.014h-19q-.074 0-.146-.014q-.073-.015-.141-.043t-.13-.069t-.113-.094q-.053-.052-.094-.113t-.069-.13t-.043-.141t-.014-.146V16q0-.074.014-.146q.015-.073.043-.141t.069-.13t.094-.113q.052-.053.113-.094t.13-.069t.141-.043t.146-.014h7.25v-2h-1.5q-1.036 0-1.768-.732T5.75 10.75V8.329q0-1.185.917-1.934m6.083 6.855h-1.5V16q0 .074-.014.146q-.015.073-.043.141t-.069.13q-.041.061-.094.113q-.052.053-.113.094t-.13.069t-.141.043t-.146.014H3.25v3h17.5v-3H13.5q-.074 0-.146-.014q-.073-.015-.141-.043t-.13-.069t-.113-.094q-.053-.052-.094-.113t-.069-.13t-.043-.141T12.75 16z");
}
</style><path class="a0uolrzbl"/>`,
		"fallback": "uix-solid:district-heating-pipe",
	});
}

export default Component;
