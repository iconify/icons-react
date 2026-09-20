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
		"content": `<style>.rfvd3nbrn {
  fill: currentColor;
  d: path("M24 100h28v72H32a4 4 0 0 0 0 8h192a4 4 0 0 0 0-8h-20v-72h28a4 4 0 0 0 2.1-7.41l-104-64a4 4 0 0 0-4.2 0l-104 64A4 4 0 0 0 24 100m36 0h40v72H60Zm88 0v72h-40v-72Zm48 72h-40v-72h40ZM128 36.7L217.87 92H38.13ZM244 208a4 4 0 0 1-4 4H16a4 4 0 0 1 0-8h224a4 4 0 0 1 4 4");
}
</style><path class="rfvd3nbrn"/>`,
		"fallback": "ph:bank-thin",
	});
}

export default Component;
