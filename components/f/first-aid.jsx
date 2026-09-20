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
		"content": `<style>.o7wj9v0dy {
  fill: currentColor;
  d: path("M216 88h-48V40a16 16 0 0 0-16-16h-48a16 16 0 0 0-16 16v48H40a16 16 0 0 0-16 16v48a16 16 0 0 0 16 16h48v48a16 16 0 0 0 16 16h48a16 16 0 0 0 16-16v-48h48a16 16 0 0 0 16-16v-48a16 16 0 0 0-16-16m0 64h-56a8 8 0 0 0-8 8v56h-48v-56a8 8 0 0 0-8-8H40v-48h56a8 8 0 0 0 8-8V40h48v56a8 8 0 0 0 8 8h56Z");
}
</style><path class="o7wj9v0dy"/>`,
		"fallback": "ph:first-aid",
	});
}

export default Component;
