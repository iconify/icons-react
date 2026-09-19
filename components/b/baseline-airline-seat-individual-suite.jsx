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
		"content": `<style>.vi2k_rn2d {
  fill: currentColor;
  d: path("M7 13c1.65 0 3-1.35 3-3S8.65 7 7 7s-3 1.35-3 3s1.35 3 3 3m12-6h-8v7H3V7H1v10h22v-6c0-2.21-1.79-4-4-4");
}
</style><path class="vi2k_rn2d"/>`,
		"fallback": "ic:baseline-airline-seat-individual-suite",
	});
}

export default Component;
