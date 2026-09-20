import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.b9x2sn8gp {
  fill: currentColor;
  d: path("M29 16a1 1 0 0 1-1 1H6.414l8.293 8.293a1 1 0 0 1-1.414 1.414l-10-10a1 1 0 0 1 0-1.414l10-10a1 1 0 1 1 1.414 1.414L6.414 15H28a1 1 0 0 1 1 1");
}
</style><path class="b9x2sn8gp"/>`,
		"fallback": "fluent:arrow-left-32-regular",
	});
}

export default Component;
