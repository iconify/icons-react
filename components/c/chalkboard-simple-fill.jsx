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
		"content": `<style>.tzszduaiz {
  fill: currentColor;
  d: path("M240 192h-8V56a16 16 0 0 0-16-16H40a16 16 0 0 0-16 16v136h-8a8 8 0 0 0 0 16h224a8 8 0 0 0 0-16m-24 0h-72v-16a8 8 0 0 1 8-8h56a8 8 0 0 1 8 8Z");
}
</style><path class="tzszduaiz"/>`,
		"fallback": "ph:chalkboard-simple-fill",
	});
}

export default Component;
