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
		"content": `<style>.hclexsbpt {
  fill: currentColor;
  d: path("M1 17V7h2v8h8V7h12v10zm8.125-3.875Q10 12.25 10 11t-.875-2.125T7 8t-2.125.875T4 11t.875 2.125T7 14t2.125-.875");
}
</style><path class="hclexsbpt"/>`,
		"fallback": "material-symbols:airline-seat-individual-suite-sharp",
	});
}

export default Component;
