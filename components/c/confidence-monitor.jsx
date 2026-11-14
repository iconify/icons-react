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
		"content": `<style>.i5mkj0bad {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M16.809 3.25H7.191q-2.817 0-3.321 2.771l-1.045 5.75q-.283 1.553.729 2.766t2.591 1.213h2.373l-1.091 4H3q-.074 0-.146.014q-.073.015-.141.043t-.13.069t-.113.094q-.053.052-.094.113t-.069.13t-.043.141t-.014.146q0 .074.014.146q.015.073.043.141t.069.13q.041.061.094.113q.052.053.113.094t.13.069t.141.043t.146.014h18q.074 0 .146-.014q.073-.015.141-.043t.13-.069q.061-.041.113-.094q.053-.052.094-.113t.069-.13t.043-.141t.014-.146q0-.074-.014-.146q-.015-.073-.043-.141t-.069-.13q-.041-.061-.094-.113q-.052-.053-.113-.094t-.13-.069t-.141-.043T21 19.75h-4.427l-1.091-4h2.373q1.579 0 2.591-1.213t.729-2.766l-1.045-5.75q-.504-2.771-3.321-2.771m-2.882 12.5h-3.854l-1.091 4h6.036zM15.053 6q1.796.001 2.193 1.752l.569 2.5q.24 1.056-.436 1.902T15.621 13H8.379q-1.083 0-1.758-.846q-.676-.846-.436-1.902l.569-2.5Q7.151 6.001 8.947 6z");
}
</style><path class="i5mkj0bad"/>`,
		"fallback": "uix-solid:confidence-monitor",
	});
}

export default Component;
