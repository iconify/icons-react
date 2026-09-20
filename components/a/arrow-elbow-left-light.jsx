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
		"content": `<style>.n244tobpe {
  fill: currentColor;
  d: path("m236.24 100.24l-96 96a6 6 0 0 1-8.48 0L30 94.48V152a6 6 0 0 1-12 0V80a6 6 0 0 1 6-6h72a6 6 0 0 1 0 12H38.48L136 183.51l91.76-91.75a6 6 0 0 1 8.48 8.48");
}
</style><path class="n244tobpe"/>`,
		"fallback": "ph:arrow-elbow-left-light",
	});
}

export default Component;
