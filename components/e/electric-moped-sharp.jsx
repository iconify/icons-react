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
		"content": `<style>.vepzlxfrz {
  fill: currentColor;
  d: path("m13 23l-6-3h4v-2l6 3h-4zm-8.125-6.875Q4 15.25 4 14H2V7h8v5h3.5L17 7.65V5h-3V3h5v5.35L14.5 14H10q0 1.25-.875 2.125T7 17t-2.125-.875m2.838-1.412Q8 14.425 8 14H6q0 .425.288.713T7 15t.713-.288M5 6V4h5v2zm11.875 10.125Q16 15.25 16 14t.875-2.125T19 11t2.125.875T22 14t-.875 2.125T19 17t-2.125-.875m2.838-1.412Q20 14.425 20 14t-.288-.712T19 13t-.712.288T18 14t.288.713T19 15t.713-.288");
}
</style><path class="vepzlxfrz"/>`,
		"fallback": "material-symbols:electric-moped-sharp",
	});
}

export default Component;
