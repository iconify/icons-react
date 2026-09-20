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
		"content": `<style>.zrbtsibbb {
  fill: currentColor;
  d: path("M3 7a1 1 0 0 1 1-1h19.5a5.5 5.5 0 1 1 0 11h-15a3.5 3.5 0 1 0 0 7h18.086l-1.293-1.293a1 1 0 0 1 1.414-1.414l3 3a1 1 0 0 1 0 1.414l-3 3a1 1 0 0 1-1.414-1.414L26.586 26H8.5a5.5 5.5 0 1 1 0-11h15a3.5 3.5 0 1 0 0-7H4a1 1 0 0 1-1-1");
}
</style><path class="zrbtsibbb"/>`,
		"fallback": "fluent:arrow-wrap-32-regular",
	});
}

export default Component;
