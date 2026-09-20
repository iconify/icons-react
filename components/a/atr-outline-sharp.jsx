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
		"content": `<style>.ijxxf_b0c {
  fill: currentColor;
  d: path("M6 20q-1.25 0-2.125-.875T3 17t.875-2.125T6 14t2.125.875T9 17t-.875 2.125T6 20m12 0q-1.25 0-2.125-.875T15 17t.875-2.125T18 14t2.125.875T21 17t-.875 2.125T18 20M9.875 9.125Q9 8.25 9 7t.875-2.125T12 4t2.125.875T15 7t-.875 2.125T12 10t-2.125-.875");
}
</style><path class="ijxxf_b0c"/>`,
		"fallback": "material-symbols:atr-outline-sharp",
	});
}

export default Component;
