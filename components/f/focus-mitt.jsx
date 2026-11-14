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
		"content": `<style>.ohizd4b2d {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M4.888 8.863q-1.187 6.408 1.862 8.549V21.5q0 .074.014.146q.015.073.043.141t.069.13q.041.061.094.113q.052.053.113.094t.13.069t.141.043t.146.014h9q.074 0 .146-.014q.073-.015.141-.043t.13-.069q.061-.041.113-.094q.053-.052.094-.113t.069-.13t.043-.141t.014-.146v-4.088q3.049-2.141 1.862-8.549Q17.795 1.75 12 1.75T4.888 8.863M8.75 9.5q0-3.25 3.25-3.25t3.25 3.25T12 12.75T8.75 9.5");
}
</style><path class="ohizd4b2d"/>`,
		"fallback": "uix-solid:focus-mitt",
	});
}

export default Component;
