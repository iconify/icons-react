import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.zktndxb_r {
  fill: currentColor;
  d: path("M7.725 7.083a.5.5 0 0 1 .628.064l4.5 4.5q.038.037.065.078a.5.5 0 0 1-.143.694a.5.5 0 0 1-.629-.065L8 8.208l-4.147 4.146a.5.5 0 0 1-.707-.707l4.5-4.5a.5.5 0 0 1 .079-.064m0-4a.5.5 0 0 1 .628.064l4.5 4.5q.038.037.065.078a.5.5 0 0 1-.143.694a.5.5 0 0 1-.629-.065L8 4.208L3.853 8.354a.5.5 0 0 1-.707-.707l4.5-4.5a.5.5 0 0 1 .079-.064");
}
</style><path class="zktndxb_r"/>`,
		"fallback": "fluent:chevron-double-up-16-regular",
	});
}

export default Component;
