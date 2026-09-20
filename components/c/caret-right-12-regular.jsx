import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.byi2r8bvp {
  fill: currentColor;
  d: path("M4 3.994c0-.887 1.07-1.335 1.702-.712l2.037 2.006a1 1 0 0 1 0 1.425L5.702 8.719C5.069 9.34 4 8.893 4 8.006zM7.037 6L5 3.994v4.012z");
}
</style><path class="byi2r8bvp"/>`,
		"fallback": "fluent:caret-right-12-regular",
	});
}

export default Component;
