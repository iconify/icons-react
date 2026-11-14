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
		"content": `<style>.ie5ujgbwb {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M21.5 4.25h-19q-.074 0-.146.014q-.073.015-.141.043t-.13.069t-.113.094q-.053.052-.094.113t-.069.13t-.043.141Q1.75 4.926 1.75 5t.014.146t.043.141t.069.13t.094.113q.052.053.113.094t.13.069t.141.043t.146.014h1.25v8.56q-2 .345-2 2.69q0 2.75 2.75 2.75T7.25 17q0-2.345-2-2.69V5.75h6v8.56q-2 .345-2 2.69q0 2.75 2.75 2.75T14.75 17q0-2.345-2-2.69V5.75h6v8.56q-2 .345-2 2.69q0 2.75 2.75 2.75T22.25 17q0-2.345-2-2.69V5.75h1.25q.074 0 .146-.014q.073-.015.141-.043t.13-.069q.061-.041.113-.094q.053-.052.094-.113t.069-.13t.043-.141T22.25 5t-.014-.146q-.015-.073-.043-.141t-.069-.13q-.041-.061-.094-.113q-.052-.053-.113-.094t-.13-.069t-.141-.043t-.146-.014");
}
</style><path class="ie5ujgbwb"/>`,
		"fallback": "uix-solid:event-bus",
	});
}

export default Component;
