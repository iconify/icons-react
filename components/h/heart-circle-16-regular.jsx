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
		"content": `<style>.egtggdcut {
  fill: currentColor;
  d: path("m8 7l-.421-.492a1.465 1.465 0 1 0-2.157 1.98l2.4 2.44c.098.1.259.1.357 0l2.4-2.44a1.465 1.465 0 1 0-2.157-1.98zM2 8a6 6 0 1 1 12 0A6 6 0 0 1 2 8m6-5a5 5 0 1 0 0 10A5 5 0 0 0 8 3");
}
</style><path class="egtggdcut"/>`,
		"fallback": "fluent:heart-circle-16-regular",
	});
}

export default Component;
