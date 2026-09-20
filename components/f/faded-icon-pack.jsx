import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.bzt-8wbsp {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M9.65 18.28a6.89 6.89 0 0 1 6.891-6.89s14.918 0 14.918 0a6.89 6.89 0 0 0 6.89-6.89s-21.808 0-21.808 0M9.65 31.717a6.89 6.89 0 0 1 6.891-6.89h7.648a6.89 6.89 0 0 0 6.89-6.89s-14.538 0-14.538 0a6.89 6.89 0 0 0-6.89 6.89");
}

.la4l2vb_n {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M16.541 17.936V11.39m0-6.89za6.89 6.89 0 0 0-6.89 6.89V43.5a6.89 6.89 0 0 0 6.89-6.89V24.827");
}
</style><path class="la4l2vb_n"/><path class="bzt-8wbsp"/>`,
		"fallback": "arcticons:faded-icon-pack",
	});
}

export default Component;
