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
		"content": `<style>.x3gkbqnmt {
  fill: currentColor;
  d: path("m213.66 82.34l-56-56A8 8 0 0 0 152 24H56a16 16 0 0 0-16 16v176a16 16 0 0 0 16 16h144a16 16 0 0 0 16-16V88a8 8 0 0 0-2.34-5.66M152 160h-48a8 8 0 0 1 0-16h48a8 8 0 0 1 0 16m0-72V43.31L196.69 88Z");
}
</style><path class="x3gkbqnmt"/>`,
		"fallback": "ph:file-minus-fill",
	});
}

export default Component;
