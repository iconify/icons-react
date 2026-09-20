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
		"content": `<style>.ounuqmiml {
  fill: currentColor;
  d: path("M17 4a1 1 0 1 0-2 0v16.586l-5.293-5.293a1 1 0 0 0-1.414 1.414l7 7a1 1 0 0 0 1.414 0l7-7a1 1 0 0 0-1.414-1.414L17 20.586zM7 27a1 1 0 1 0 0 2h18a1 1 0 1 0 0-2z");
}
</style><path class="ounuqmiml"/>`,
		"fallback": "fluent:arrow-download-32-regular",
	});
}

export default Component;
