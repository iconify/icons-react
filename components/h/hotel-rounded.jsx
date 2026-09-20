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
		"content": `<style>.tco_vwbgx {
  fill: currentColor;
  d: path("M2 19q-.425 0-.712-.288T1 18V5q0-.425.288-.712T2 4t.713.288T3 5v9h8V8q0-.825.588-1.412T13 6h6q1.65 0 2.825 1.175T23 10v8q0 .425-.288.713T22 19t-.712-.288T21 18v-2H3v2q0 .425-.288.713T2 19m2.875-6.875Q4 11.25 4 10t.875-2.125T7 7t2.125.875T10 10t-.875 2.125T7 13t-2.125-.875");
}
</style><path class="tco_vwbgx"/>`,
		"fallback": "material-symbols:hotel-rounded",
	});
}

export default Component;
