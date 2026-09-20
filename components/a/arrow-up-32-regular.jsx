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
		"content": `<style>.q1t6bsb1s {
  fill: currentColor;
  d: path("M16 29a1 1 0 0 1-1-1V6.414l-8.293 8.293a1 1 0 0 1-1.414-1.414l10-10a1 1 0 0 1 1.414 0l10 10a1 1 0 0 1-1.414 1.414L17 6.414V28a1 1 0 0 1-1 1");
}
</style><path class="q1t6bsb1s"/>`,
		"fallback": "fluent:arrow-up-32-regular",
	});
}

export default Component;
