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
		"content": `<style>.m1tu9c4qx {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M15.625 3.25h-7.25q-2.123 0-3.624 1.501T3.25 8.375v7.25q0 2.123 1.501 3.624t3.624 1.501h7.25q2.123 0 3.624-1.501t1.501-3.624v-7.25q0-2.123-1.501-3.624T15.625 3.25m-.155 4.22q.052-.053.113-.094t.13-.069t.141-.043T16 7.25t.146.014q.073.015.141.043t.13.069q.061.041.113.094q.106.105.163.243T16.75 8t-.057.287t-.163.243l-8 8q-.105.106-.243.163T8 16.75t-.287-.057t-.243-.163q-.053-.052-.094-.113t-.069-.13t-.043-.141T7.25 16q0-.074.014-.146q.015-.073.043-.141t.069-.13t.094-.113z");
}
</style><path class="m1tu9c4qx"/>`,
		"fallback": "uix-solid:checkbox-disabled",
	});
}

export default Component;
