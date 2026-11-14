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
		"content": `<style>.k-rh_ubry {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M20.25 10.31q2 .345 2 2.69v6.5q0 2.75-2.75 2.75h-15q-2.75 0-2.75-2.75V11q0-1.139.805-1.945q.806-.805 1.945-.805h1.25V2.5q0-.074.014-.146q.015-.073.043-.141t.069-.13t.094-.113q.052-.053.113-.094t.13-.069t.141-.043q.072-.014.146-.014h13q.074 0 .146.014q.073.015.141.043t.13.069q.061.041.113.094q.053.052.094.113t.069.13t.043.141t.014.146zm-13-2.06H8q.149 0 .287.057t.243.163l1.781 1.78h8.439v-7H7.25zm3.25-1.5q0-2.5 2.5-2.5t2.5 2.5t-2.5 2.5t-2.5-2.5");
}
</style><path class="k-rh_ubry"/>`,
		"fallback": "uix-solid:budget-public",
	});
}

export default Component;
