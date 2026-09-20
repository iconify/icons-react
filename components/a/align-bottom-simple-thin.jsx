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
		"content": `<style>.c8w3wt7vh {
  fill: currentColor;
  d: path("M204 232a4 4 0 0 1-4 4H56a4 4 0 0 1 0-8h144a4 4 0 0 1 4 4M84 192V40a12 12 0 0 1 12-12h64a12 12 0 0 1 12 12v152a12 12 0 0 1-12 12H96a12 12 0 0 1-12-12m8 0a4 4 0 0 0 4 4h64a4 4 0 0 0 4-4V40a4 4 0 0 0-4-4H96a4 4 0 0 0-4 4Z");
}
</style><path class="c8w3wt7vh"/>`,
		"fallback": "ph:align-bottom-simple-thin",
	});
}

export default Component;
