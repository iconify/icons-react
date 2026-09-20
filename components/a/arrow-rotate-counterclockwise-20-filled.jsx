import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.dd96ecbff {
  fill: currentColor;
  d: path("M10 2.5a7.5 7.5 0 0 1 7.5 7.5a.75.75 0 0 1-1.5 0a6 6 0 1 0-9.5 4.871V13.25a.75.75 0 0 1 1.5 0v3.5a.75.75 0 0 1-.75.75h-3.5a.75.75 0 0 1 0-1.5h1.753A7.5 7.5 0 0 1 10 2.5m0 5a2.5 2.5 0 1 1 0 5a2.5 2.5 0 0 1 0-5M10 9a1 1 0 1 0 0 2a1 1 0 0 0 0-2");
}
</style><path class="dd96ecbff"/>`,
		"fallback": "fluent:arrow-rotate-counterclockwise-20-filled",
	});
}

export default Component;
