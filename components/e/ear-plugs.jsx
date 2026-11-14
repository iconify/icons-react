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
		"content": `<style>.plc21ebrp {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M2.75 16V7q0-3.75 3.75-3.75T10.25 7v9q0 .074-.014.146q-.015.073-.043.141t-.069.13q-.041.061-.094.113q-.052.053-.113.094t-.13.069t-.141.043t-.146.014H7.303q.448 3 4.697 3t4.697-3H14.5q-.074 0-.146-.014q-.073-.015-.141-.043t-.13-.069t-.113-.094q-.053-.052-.094-.113t-.069-.13t-.043-.141T13.75 16V7q0-3.75 3.75-3.75T21.25 7v9q0 .074-.014.146q-.015.073-.043.141t-.069.13q-.041.061-.094.113q-.052.053-.113.094t-.13.069t-.141.043t-.146.014h-2.284q-.43 4.5-6.216 4.5t-6.216-4.5H3.5q-.074 0-.146-.014q-.073-.015-.141-.043t-.13-.069t-.113-.094q-.053-.052-.094-.113t-.069-.13t-.043-.141T2.75 16");
}
</style><path class="plc21ebrp"/>`,
		"fallback": "uix-solid:ear-plugs",
	});
}

export default Component;
