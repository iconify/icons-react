import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.yv34oibdz {
  fill: currentColor;
  d: path("M24.134 32.634a1.25 1.25 0 0 0 0-1.768l-5.616-5.616H32.75a1.25 1.25 0 1 0 0-2.5H18.518l5.616-5.616a1.25 1.25 0 0 0-1.768-1.768l-7.75 7.75a1.25 1.25 0 0 0 0 1.768l7.75 7.75a1.25 1.25 0 0 0 1.768 0M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4S4 12.954 4 24s8.954 20 20 20m17.5-20c0 9.665-7.835 17.5-17.5 17.5S6.5 33.665 6.5 24S14.335 6.5 24 6.5S41.5 14.335 41.5 24");
}
</style><path class="yv34oibdz"/>`,
		"fallback": "fluent:arrow-circle-left-48-regular",
	});
}

export default Component;
