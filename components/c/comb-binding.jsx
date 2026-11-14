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
		"content": `<style>.c_xyu36mj {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M7.25 1.75q2 0 2 2H10q0-2 2-2t2 2h.75q0-2 2-2t2 2v1.007q.13.113.255.238Q20.25 6.24 20.25 8v7.5q0 1.76-1.245 3.005T16 19.75H8q-1.76 0-3.005-1.245T3.75 15.5V8q0-1.76 1.245-3.005q.125-.125.255-.238V3.75q0-2 2-2m-.75 19q-.074 0-.146.014q-.073.015-.141.043t-.13.069q-.061.041-.113.094q-.053.052-.094.113t-.069.13t-.043.141t-.014.146q0 .074.014.146q.015.073.043.141t.069.13q.041.061.094.113q.052.053.113.094t.13.069t.141.043t.146.014h11q.074 0 .146-.014q.073-.015.141-.043t.13-.069q.061-.041.113-.094q.053-.052.094-.113t.069-.13t.043-.141t.014-.146q0-.074-.014-.146q-.015-.073-.043-.141t-.069-.13q-.041-.061-.094-.113q-.052-.053-.113-.094t-.13-.069t-.141-.043t-.146-.014z");
}
</style><path class="c_xyu36mj"/>`,
		"fallback": "uix-solid:comb-binding",
	});
}

export default Component;
