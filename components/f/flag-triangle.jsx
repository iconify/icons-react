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
		"content": `<style>.fzo2slh5k {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M7.25 4.171V3q0-.074-.014-.146q-.015-.073-.043-.141t-.069-.13t-.094-.113q-.052-.053-.113-.094t-.13-.069t-.141-.043Q6.574 2.25 6.5 2.25t-.146.014t-.141.043t-.13.069t-.113.094q-.053.052-.094.113t-.069.13t-.043.141T5.75 3v18q0 .074.014.146q.015.073.043.141t.069.13q.041.061.094.113q.052.053.113.094t.13.069t.141.043t.146.014t.146-.014q.073-.015.141-.043t.13-.069q.061-.041.113-.094q.053-.052.094-.113t.069-.13t.043-.141T7.25 21v-7.671q.863.399 1.83.058l6.477-2.278q1.671-.588 1.671-2.359t-1.671-2.358L9.08 4.113q-.967-.341-1.83.058");
}
</style><path class="fzo2slh5k"/>`,
		"fallback": "uix-solid:flag-triangle",
	});
}

export default Component;
