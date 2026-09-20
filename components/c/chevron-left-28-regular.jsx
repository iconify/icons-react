import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":28,"height":28};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.b17082opm {
  fill: currentColor;
  d: path("M18.03 22.78a.75.75 0 0 1-1.06 0l-8.75-8.75a.75.75 0 0 1 0-1.06l8.75-8.75a.75.75 0 1 1 1.06 1.06L9.81 13.5l8.22 8.22a.75.75 0 0 1 0 1.06");
}
</style><path class="b17082opm"/>`,
		"fallback": "fluent:chevron-left-28-regular",
	});
}

export default Component;
