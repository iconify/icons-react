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
		"content": `<style>.radu1-brl {
  fill: currentColor;
  d: path("M7.5 3A3.5 3.5 0 0 1 11 6.5v19a3.5 3.5 0 1 1-7 0v-19A3.5 3.5 0 0 1 7.5 3m9 6a3.5 3.5 0 0 1 3.5 3.5v13a3.5 3.5 0 1 1-7 0v-13A3.5 3.5 0 0 1 16.5 9m9 6a3.5 3.5 0 0 1 3.5 3.5v7a3.5 3.5 0 1 1-7 0v-7a3.5 3.5 0 0 1 3.5-3.5");
}
</style><path class="radu1-brl"/>`,
		"fallback": "fluent:data-bar-vertical-32-filled",
	});
}

export default Component;
