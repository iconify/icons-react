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
		"content": `<style>.uceamjvum {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M9 2.5H7q-1.76 0-3.005 1.245T2.75 6.75v3.5q0 1.76 1.245 3.005T7 14.5h.298q.356 2.701 3.374 3.829q1.806.675 3.039 1.671H11q-.074 0-.146.014q-.073.015-.141.043t-.13.069t-.113.094q-.053.052-.094.113t-.069.13t-.043.141t-.014.146t.014.146q.015.073.043.141t.069.13q.041.061.094.113q.052.053.113.094t.13.069t.141.043t.146.014h10.5q.074 0 .146-.014q.073-.015.141-.043t.13-.069q.061-.041.113-.094q.053-.052.094-.113t.069-.13t.043-.141t.014-.146q0-.074-.014-.146q-.015-.073-.043-.141t-.069-.13q-.041-.061-.094-.113q-.052-.053-.113-.094t-.13-.069t-.141-.043T21.5 20h-5.644q-1.667-1.958-4.658-3.076q-2.019-.755-2.373-2.424H9q1.76 0 3.005-1.245t1.245-3.005v-3.5q0-1.76-1.245-3.005T9 2.5m-.431 3.262Q10.5 8.014 10.5 9.25q0 2.5-2.5 2.5t-2.5-2.5q0-1.236 1.931-3.488q.097-.113.23-.181t.281-.079t.291.035t.255.144q.044.037.081.081");
}
</style><path class="uceamjvum"/>`,
		"fallback": "uix-solid:blood-transfusion",
	});
}

export default Component;
