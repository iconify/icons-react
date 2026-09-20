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
		"content": `<style>.p9ook4f-u {
  fill: currentColor;
  d: path("M5 22v-2H3V5h2V3h8.375q-.125.35-.213.725t-.137.775H7V6h6.075q.1.475.275.975T13.8 8H5v4h12.1l1.9 1.625l2-1.7V20h-2v2h-3v-2H8v2zM18.288 5.712Q18 5.425 18 5t.288-.712T19 4t.713.288T20 5t-.288.713T19 6t-.712-.288M19 11q2.025-1.725 3.013-3.187T23 5.1q0-1.7-1.162-2.9T19 1t-2.837 1.2T15 5.1q0 1.25.988 2.713T19 11M6 17h4v-2H6zm8 0h4v-2h-4z");
}
</style><path class="p9ook4f-u"/>`,
		"fallback": "material-symbols:bus-map-pin-2-sharp",
	});
}

export default Component;
