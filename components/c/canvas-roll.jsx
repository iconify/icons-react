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
		"content": `<style>.d8orsxbgb {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M2.5 8q0-5.75 3.5-5.75h11.5Q21 2.25 21 8v12.5q0 .074-.014.146q-.015.073-.043.141t-.069.13q-.041.061-.094.113q-.052.053-.113.094t-.13.069t-.141.043t-.146.014H6q-.074 0-.146-.014q-.073-.015-.141-.043t-.13-.069q-.061-.041-.113-.094q-.053-.052-.094-.113t-.069-.13t-.043-.141t-.014-.146v-6.824Q2.5 13.097 2.5 8m15-4.25H8.662Q9.5 5.187 9.5 8t-.838 4.25H17.5q2 0 2-4.25t-2-4.25m2 16v-6.976q-.852.976-2 .976H6.75v6z");
}
</style><path class="d8orsxbgb"/>`,
		"fallback": "uix-solid:canvas-roll",
	});
}

export default Component;
