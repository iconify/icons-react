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
		"content": `<style>.nqcfzybmh {
  fill: currentColor;
  d: path("M10.05 7.65L13 10.575V8.35h2V14H9.35v-2h2.25L8.65 9.05zM19 20q-1.25 0-2.125-.875T16 17t.875-2.125T19 14t2.125.875T22 17t-.875 2.125T19 20M4 20q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4h16q.825 0 1.413.588T22 6v6h-2V6H4v12h10v2z");
}
</style><path class="nqcfzybmh"/>`,
		"fallback": "material-symbols:bubbles-outline",
	});
}

export default Component;
