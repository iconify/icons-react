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
		"content": `<style>.zw-jlifxn {
  fill: currentColor;
  d: path("M14 4.5a5.5 5.5 0 0 0-5.496 5.28a.75.75 0 0 1-.75.72H7.5a4 4 0 0 0 0 8h4.566a7.6 7.6 0 0 0-.05 1.5H7.5a5.5 5.5 0 0 1-.431-10.983a7.001 7.001 0 0 1 13.862 0a5.5 5.5 0 0 1 4.963 6.561a7.5 7.5 0 0 0-1.444-1.713A4 4 0 0 0 20.5 10.5h-.255a.75.75 0 0 1-.75-.72A5.5 5.5 0 0 0 14 4.5m12 15a6.5 6.5 0 1 1-13 0a6.5 6.5 0 0 1 13 0M19.5 16a.5.5 0 0 0-.5.5v4a.5.5 0 0 0 1 0v-4a.5.5 0 0 0-.5-.5m0 7.125a.625.625 0 1 0 0-1.25a.625.625 0 0 0 0 1.25");
}
</style><path class="zw-jlifxn"/>`,
		"fallback": "fluent:cloud-error-28-regular",
	});
}

export default Component;
