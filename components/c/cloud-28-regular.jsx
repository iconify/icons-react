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
		"content": `<style>.twezi5bqw {
  fill: currentColor;
  d: path("M14 6.5a5.5 5.5 0 0 0-5.496 5.28a.75.75 0 0 1-.75.72H7.5a4 4 0 0 0 0 8h13a4 4 0 0 0 0-8h-.255a.75.75 0 0 1-.75-.72A5.5 5.5 0 0 0 14 6.5m-6.931 4.517a7.001 7.001 0 0 1 13.862 0A5.5 5.5 0 0 1 20.5 22h-13a5.5 5.5 0 0 1-.431-10.983");
}
</style><path class="twezi5bqw"/>`,
		"fallback": "fluent:cloud-28-regular",
	});
}

export default Component;
