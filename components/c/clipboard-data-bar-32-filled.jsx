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
		"content": `<style>.ochy9kbyu {
  fill: currentColor;
  d: path("M23.5 4h-1.67A3 3 0 0 0 19 2h-6a3 3 0 0 0-2.83 2H8.5A3.5 3.5 0 0 0 5 7.5v19A3.5 3.5 0 0 0 8.5 30h15a3.5 3.5 0 0 0 3.5-3.5v-19A3.5 3.5 0 0 0 23.5 4M13 4h6a1 1 0 1 1 0 2h-6a1 1 0 1 1 0-2m-2.5 8a1.5 1.5 0 0 1 1.5 1.5v9a1.5 1.5 0 0 1-3 0v-9a1.5 1.5 0 0 1 1.5-1.5m4 3.5a1.5 1.5 0 0 1 3 0v7a1.5 1.5 0 0 1-3 0zm7 2.5a1.5 1.5 0 0 1 1.5 1.5v3a1.5 1.5 0 0 1-3 0v-3a1.5 1.5 0 0 1 1.5-1.5");
}
</style><path class="ochy9kbyu"/>`,
		"fallback": "fluent:clipboard-data-bar-32-filled",
	});
}

export default Component;
