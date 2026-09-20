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
		"content": `<style>.vlm4j-ble {
  fill: currentColor;
  d: path("M6 10.5h6V5H6zM5 20V4h8v7.616h2.539v7.5h2.865V8.885H17.25V6.5h.404V5.385h.769V6.5h.846V5.385h.77V6.5h.403v2.385h-1.154V20h-4.634v-7.5H13V20zm3.654-1.884l1.769-3.231H9.366v-2.52l-1.789 3.231h1.077z");
}
</style><path class="vlm4j-ble"/>`,
		"fallback": "material-symbols-light:ev-charger-sharp",
	});
}

export default Component;
