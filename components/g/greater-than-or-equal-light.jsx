import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.k7ogbrshi {
  fill: currentColor;
  d: path("M53.93 154.37L190.64 104L53.93 53.63a6 6 0 1 1 4.15-11.26l152 56a6 6 0 0 1 0 11.26l-152 56A6.1 6.1 0 0 1 56 166a6 6 0 0 1-2.07-11.63M208 194H56a6 6 0 0 0 0 12h152a6 6 0 0 0 0-12");
}
</style><path class="k7ogbrshi"/>`,
		"fallback": "ph:greater-than-or-equal-light",
	});
}

export default Component;
