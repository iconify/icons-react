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
		"content": `<style>.dd_nexbhs {
  fill: currentColor;
  d: path("m229.66 157.66l-48 48A8 8 0 0 1 168 200v-40h-40A104.11 104.11 0 0 1 24 56a8 8 0 0 1 16 0a88.1 88.1 0 0 0 88 88h40v-40a8 8 0 0 1 13.66-5.66l48 48a8 8 0 0 1 0 11.32");
}
</style><path class="dd_nexbhs"/>`,
		"fallback": "ph:arrow-bend-down-right-fill",
	});
}

export default Component;
