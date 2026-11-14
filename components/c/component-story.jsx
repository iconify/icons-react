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
		"content": `<style>.udvn62iwn {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M4.25 5v14q0 1.346.952 2.298t2.298.952h12q.074 0 .146-.014q.073-.015.141-.043t.13-.069q.061-.041.113-.094q.053-.052.094-.113t.069-.13t.043-.141t.014-.146v-19q0-.074-.014-.146q-.015-.073-.043-.141t-.069-.13t-.094-.113q-.052-.053-.113-.094t-.13-.069t-.141-.043t-.146-.014h-12q-1.346 0-2.298.952T4.25 5m9.28 2.78q-1.28 1.28-2.56.001q-1.28-1.281 0-2.561t2.56 0t0 2.56m-3 3q-1.28 1.28-2.56 0t0-2.56t2.56-.001v.001q1.28 1.28 0 2.56m6-2.56q1.28 1.28 0 2.56t-2.56 0t0-2.56t2.56-.001zm-3 3q1.28 1.28 0 2.56t-2.56 0t0-2.56t2.56 0");
}
</style><path class="udvn62iwn"/>`,
		"fallback": "uix-solid:component-story",
	});
}

export default Component;
