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
		"content": `<style>.qrrpi-bmu {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M22.25 21.5V3q0-.074-.014-.146q-.015-.073-.043-.141t-.069-.13t-.094-.113q-.052-.053-.113-.094t-.13-.069t-.141-.043t-.146-.014t-.146.014q-.073.015-.141.043t-.13.069q-.061.041-.113.094q-.053.052-.094.113t-.069.13t-.043.141T20.75 3v13.804q-1.491.219-2.609 1.337t-1.337 2.609H3q-.074 0-.146.014q-.073.015-.141.043t-.13.069t-.113.094q-.053.052-.094.113t-.069.13t-.043.141t-.014.146q0 .074.014.146q.015.073.043.141t.069.13q.041.061.094.113q.052.053.113.094t.13.069t.141.043t.146.014h18.5q.074 0 .146-.014q.073-.015.141-.043t.13-.069q.061-.041.113-.094q.053-.052.094-.113t.069-.13t.043-.141t.014-.146M8.934 8.934Q7.25 10.618 7.25 13t1.684 4.066T13 18.75t4.066-1.684T18.75 13t-1.684-4.066T13 7.25T8.934 8.934M20.75 20.75v-2.451q-2.15.301-2.451 2.451z");
}
</style><path class="qrrpi-bmu"/>`,
		"fallback": "uix-solid:corner-kick",
	});
}

export default Component;
