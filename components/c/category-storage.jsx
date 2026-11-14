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
		"content": `<style>.kvesneych {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M5.5 3.25h13q1.346 0 2.298.952T21.75 6.5t-.952 2.298q-.478.478-1.056.716q.508.802.508 2.111v6.25q0 3.375-3.375 3.375h-9.75q-3.375 0-3.375-3.375v-6.25q0-1.25.463-2.036Q2.25 9.026 2.25 6.5q0-1.346.952-2.298T5.5 3.25m9 9.5h-5q-.074 0-.146.014q-.073.015-.141.043t-.13.069t-.113.094q-.053.052-.094.113t-.069.13t-.043.141t-.014.146t.014.146q.015.073.043.141t.069.13t.094.113q.052.053.113.094t.13.069t.141.043t.146.014h5q.074 0 .146-.014q.073-.015.141-.043t.13-.069t.113-.094q.053-.052.094-.113t.069-.13t.043-.141t.014-.146t-.014-.146q-.015-.073-.043-.141t-.069-.13t-.094-.113q-.052-.053-.113-.094t-.13-.069t-.141-.043t-.146-.014");
}
</style><path class="kvesneych"/>`,
		"fallback": "uix-solid:category-storage",
	});
}

export default Component;
