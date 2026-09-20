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
		"content": `<style>.qaj-s9b0w {
  fill: currentColor;
  d: path("M3 6a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3zm3-2a2 2 0 0 0-2 2v1.058l5.5-.053V4zm4.5 0v8H16V6a2 2 0 0 0-2-2zm5.5 9h-5.5v3H14a2 2 0 0 0 2-2zm-6.5 3V8.005L4 8.058V14a2 2 0 0 0 2 2z");
}
</style><path class="qaj-s9b0w"/>`,
		"fallback": "fluent:board-20-regular",
	});
}

export default Component;
