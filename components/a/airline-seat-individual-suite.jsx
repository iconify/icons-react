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
		"content": `<style>.whkrx1byn {
  fill: currentColor;
  d: path("M1 17V7h2v8h8V7h8q1.65 0 2.825 1.175T23 11v6zm8.125-3.875Q10 12.25 10 11t-.875-2.125T7 8t-2.125.875T4 11t.875 2.125T7 14t2.125-.875");
}
</style><path class="whkrx1byn"/>`,
		"fallback": "material-symbols:airline-seat-individual-suite",
	});
}

export default Component;
