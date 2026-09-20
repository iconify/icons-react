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
		"content": `<style>.p-3l2mo4p {
  fill: currentColor;
  d: path("M237.07 52.8A6 6 0 0 0 232 50H40a6 6 0 0 0-4.24 10.24L79.51 104l-43.75 43.76A6 6 0 0 0 40 158h136.78l-30.2 63.42a6 6 0 0 0 10.84 5.16l80-168a6 6 0 0 0-.35-5.78M182.5 146h-128l37.75-37.76a6 6 0 0 0 0-8.48L54.49 62h168Z");
}
</style><path class="p-3l2mo4p"/>`,
		"fallback": "ph:flag-banner-light",
	});
}

export default Component;
