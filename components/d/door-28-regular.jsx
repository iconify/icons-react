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
		"content": `<style>.zmw-umhvd {
  fill: currentColor;
  d: path("M9.5 15a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3M5 5a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v18a3 3 0 0 1-3 3H8a3 3 0 0 1-3-3zm3-1.5A1.5 1.5 0 0 0 6.5 5v18A1.5 1.5 0 0 0 8 24.5h12a1.5 1.5 0 0 0 1.5-1.5V5A1.5 1.5 0 0 0 20 3.5z");
}
</style><path class="zmw-umhvd"/>`,
		"fallback": "fluent:door-28-regular",
	});
}

export default Component;
