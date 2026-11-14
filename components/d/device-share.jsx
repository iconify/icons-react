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
		"content": `<style>.ahnri-l_j {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M13.25 2.25h-5.5q-2.485 0-4.243 1.757Q1.75 5.765 1.75 8.25v5.5q0 2.485 1.757 4.243Q5.265 19.75 7.75 19.75h4.941q.475-.977 1.461-1.739q.114-.088.231-.17Q14 16.987 14 15.75q0-4 4-4q.683 0 1.25.117V8.25q0-2.485-1.757-4.243Q15.735 2.25 13.25 2.25M6 10q0-3.5 3.5-3.5T13 10t-3.5 3.5T6 10m12 3q-2.75 0-2.75 2.75q0 1.767 1.136 2.399q-2.886.598-2.886 3.601q0 .074.014.146q.015.073.043.141t.069.13q.041.061.094.113q.052.053.113.094t.13.069t.141.043t.146.014t.146-.014q.073-.015.141-.043t.13-.069t.113-.094q.053-.052.094-.113t.069-.13t.043-.141t.014-.146q0-2.25 3-2.25t3 2.25q0 .074.014.146q.015.073.043.141t.069.13q.041.061.094.113q.052.053.113.094t.13.069t.141.043t.146.014q.074 0 .146-.014q.073-.015.141-.043t.13-.069q.061-.041.113-.094q.053-.052.094-.113t.069-.13t.043-.141t.014-.146q0-3.003-2.886-3.601q1.136-.632 1.136-2.399Q20.75 13 18 13m0 4q-1.25 0-1.25-1.25T18 14.5t1.25 1.25T18 17");
}
</style><path class="ahnri-l_j"/>`,
		"fallback": "uix-solid:device-share",
	});
}

export default Component;
