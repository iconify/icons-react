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
		"content": `<style>.pqpbvqoof {
  fill: currentColor;
  d: path("M2.22 7.53a.75.75 0 0 0 1.06 0L6 4.81l2.72 2.72a.75.75 0 0 0 1.06-1.06L6.53 3.22a.75.75 0 0 0-1.06 0L2.22 6.47a.75.75 0 0 0 0 1.06");
}
</style><path class="pqpbvqoof"/>`,
		"fallback": "fluent:chevron-up-12-filled",
	});
}

export default Component;
