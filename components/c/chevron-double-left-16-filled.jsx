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
		"content": `<style>.n6_dmbdgl {
  fill: currentColor;
  d: path("M6.97 3.22a.75.75 0 1 1 1.06 1.06L4.31 8l3.72 3.72a.75.75 0 1 1-1.06 1.06L2.72 8.53a.75.75 0 0 1 0-1.06zm4.5 0a.75.75 0 1 1 1.06 1.06L8.81 8l3.72 3.72a.75.75 0 1 1-1.06 1.06L7.22 8.53a.75.75 0 0 1 0-1.06z");
}
</style><path class="n6_dmbdgl"/>`,
		"fallback": "fluent:chevron-double-left-16-filled",
	});
}

export default Component;
