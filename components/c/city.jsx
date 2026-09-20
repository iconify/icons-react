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
		"content": `<style>.ly_q9m19z {
  fill: currentColor;
  d: path("M240 208h-8V88a8 8 0 0 0-8-8h-64a8 8 0 0 0-8 8v40h-48V40a8 8 0 0 0-8-8H32a8 8 0 0 0-8 8v168h-8a8 8 0 0 0 0 16h224a8 8 0 0 0 0-16M168 96h48v112h-48Zm-16 48v64h-48v-64ZM40 48h48v160H40Zm32 24v16a8 8 0 0 1-16 0V72a8 8 0 0 1 16 0m0 48v16a8 8 0 0 1-16 0v-16a8 8 0 0 1 16 0m0 48v16a8 8 0 0 1-16 0v-16a8 8 0 0 1 16 0m48 16v-16a8 8 0 0 1 16 0v16a8 8 0 0 1-16 0m64 0v-16a8 8 0 0 1 16 0v16a8 8 0 0 1-16 0m0-48v-16a8 8 0 0 1 16 0v16a8 8 0 0 1-16 0");
}
</style><path class="ly_q9m19z"/>`,
		"fallback": "ph:city",
	});
}

export default Component;
