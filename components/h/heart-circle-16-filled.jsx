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
		"content": `<style>.mt1rp5bfz {
  fill: currentColor;
  d: path("M2 8a6 6 0 1 1 12 0A6 6 0 0 1 2 8m6-1l-.422-.492a1.465 1.465 0 1 0-2.156 1.98l2.4 2.44c.097.1.258.1.356 0l2.4-2.44a1.465 1.465 0 1 0-2.157-1.98z");
}
</style><path class="mt1rp5bfz"/>`,
		"fallback": "fluent:heart-circle-16-filled",
	});
}

export default Component;
