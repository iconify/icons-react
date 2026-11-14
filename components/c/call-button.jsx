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
		"content": `<style>.tf99oyxat {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M10.25 1.75h3.5q2.485 0 4.243 1.757Q19.75 5.265 19.75 7.75v8.5q0 2.485-1.757 4.243q-1.758 1.757-4.243 1.757h-3.5q-2.485 0-4.243-1.757Q4.25 18.735 4.25 16.25v-8.5q0-2.485 1.757-4.243Q7.765 1.75 10.25 1.75M14 17.25h-4q-.074 0-.146.014q-.073.015-.141.043t-.13.069t-.113.094q-.053.052-.094.113t-.069.13t-.043.141T9.25 18t.014.146q.015.073.043.141t.069.13q.041.061.094.113q.052.053.113.094t.13.069t.141.043t.146.014h4q.074 0 .146-.014q.073-.015.141-.043t.13-.069t.113-.094q.053-.052.094-.113t.069-.13t.043-.141t.014-.146t-.014-.146q-.015-.073-.043-.141t-.069-.13q-.041-.061-.094-.113q-.052-.053-.113-.094t-.13-.069t-.141-.043T14 17.25");
}
</style><path class="tf99oyxat"/>`,
		"fallback": "uix-solid:call-button",
	});
}

export default Component;
