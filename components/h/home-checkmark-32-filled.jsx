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
		"content": `<style>.q69kapb1q {
  fill: currentColor;
  d: path("M13.896 2.775a3.25 3.25 0 0 1 4.209 0l9.75 8.289A3.25 3.25 0 0 1 29 13.539V26.5a2.5 2.5 0 0 1-2.5 2.5h-21A2.5 2.5 0 0 1 3 26.5V13.54c0-.953.42-1.858 1.146-2.476zm7.561 11.018a1 1 0 0 0-1.414 0l-5.793 5.793l-2.293-2.293a1 1 0 1 0-1.414 1.414l3 3a1 1 0 0 0 1.414 0l6.5-6.5a1 1 0 0 0 0-1.414");
}
</style><path class="q69kapb1q"/>`,
		"fallback": "fluent:home-checkmark-32-filled",
	});
}

export default Component;
