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
		"content": `<style>.gjcaj-b6b {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M16.5 1.75h-9q-1.76 0-3.005 1.245T3.25 6v8q0 1.76 1.245 3.005q1.155 1.156 2.755 1.239V21.5q0 .074.014.146q.015.073.043.141t.069.13q.041.061.094.113q.052.053.113.094t.13.069t.141.043t.146.014t.146-.014q.073-.015.141-.043t.13-.069t.113-.094q.053-.052.094-.113t.069-.13t.043-.141t.014-.146v-3.25h2.5v3.25q0 .074.014.146q.015.073.043.141t.069.13q.041.061.094.113q.052.053.113.094t.13.069t.141.043t.146.014t.146-.014q.073-.015.141-.043t.13-.069t.113-.094q.053-.052.094-.113t.069-.13t.043-.141t.014-.146v-3.25h2.5v3.25q0 .074.014.146q.015.073.043.141t.069.13q.041.061.094.113q.052.053.113.094t.13.069t.141.043t.146.014t.146-.014q.073-.015.141-.043t.13-.069q.061-.041.113-.094q.053-.052.094-.113t.069-.13t.043-.141t.014-.146v-3.256q1.6-.083 2.755-1.239Q20.75 15.76 20.75 14V6q0-1.76-1.245-3.005T16.5 1.75");
}
</style><path class="gjcaj-b6b"/>`,
		"fallback": "uix-solid:heat-interface-unit",
	});
}

export default Component;
