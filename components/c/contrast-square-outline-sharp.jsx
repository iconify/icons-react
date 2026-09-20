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
		"content": `<style>.lzsfkwb-u {
  fill: currentColor;
  d: path("M4 20V4h16v16zm1-1h14V5zm1.289-9.827h2v2h.884v-2h2v-.885h-2v-2h-.885v2h-2zm10.698 6.423h-4.385v-.884h4.385z");
}
</style><path class="lzsfkwb-u"/>`,
		"fallback": "material-symbols-light:contrast-square-outline-sharp",
	});
}

export default Component;
