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
		"content": `<style>.vv9litbrt {
  fill: currentColor;
  d: path("M212 32a12 12 0 0 1-12 12a84.09 84.09 0 0 0-84 84v67l27.51-27.52a12 12 0 0 1 17 17l-48 48a12 12 0 0 1-17 0l-48-48a12 12 0 0 1 17-17L92 195v-67A108.12 108.12 0 0 1 200 20a12 12 0 0 1 12 12");
}
</style><path class="vv9litbrt"/>`,
		"fallback": "ph:arrow-bend-left-down-bold",
	});
}

export default Component;
