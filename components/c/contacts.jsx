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
		"content": `<style>.jhmglqboq {
  fill: currentColor;
  d: path("M4 23v-2h16v2zM4 3V1h16v2zm8 10q1.25 0 2.125-.875T15 10t-.875-2.125T12 7t-2.125.875T9 10t.875 2.125T12 13m-8 7q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4h16q.825 0 1.413.588T22 6v12q0 .825-.587 1.413T20 20zm1.75-2h12.5q-1.125-1.4-2.725-2.2T12 15t-3.525.8T5.75 18");
}
</style><path class="jhmglqboq"/>`,
		"fallback": "material-symbols:contacts",
	});
}

export default Component;
