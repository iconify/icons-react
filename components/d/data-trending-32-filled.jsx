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
		"content": `<style>.hu2gcbcdd {
  fill: currentColor;
  d: path("M5.5 4.25a1.25 1.25 0 1 0-2.5 0v20.5A4.25 4.25 0 0 0 7.25 29h20.5a1.25 1.25 0 1 0 0-2.5H7.25a1.75 1.75 0 0 1-1.75-1.75zM20.246 6.5a1.25 1.25 0 1 0 0 2.5h3.986L18.5 14.732l-3.116-3.116a1.25 1.25 0 0 0-1.768 0l-6.25 6.25a1.25 1.25 0 0 0 1.768 1.768l5.366-5.366l3.116 3.116a1.25 1.25 0 0 0 1.768 0l6.612-6.612v3.978a1.25 1.25 0 1 0 2.5 0v-7c0-.69-.56-1.25-1.25-1.25z");
}
</style><path class="hu2gcbcdd"/>`,
		"fallback": "fluent:data-trending-32-filled",
	});
}

export default Component;
