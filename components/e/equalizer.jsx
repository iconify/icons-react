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
		"content": `<style>.oqak5z8wn {
  fill: currentColor;
  d: path("M80 96a8 8 0 0 1-8 8H24a8 8 0 0 1 0-16h48a8 8 0 0 1 8 8m-8 24H24a8 8 0 0 0 0 16h48a8 8 0 0 0 0-16m0 32H24a8 8 0 0 0 0 16h48a8 8 0 0 0 0-16m0 32H24a8 8 0 0 0 0 16h48a8 8 0 0 0 0-16m80-64h-48a8 8 0 0 0 0 16h48a8 8 0 0 0 0-16m0 32h-48a8 8 0 0 0 0 16h48a8 8 0 0 0 0-16m0 32h-48a8 8 0 0 0 0 16h48a8 8 0 0 0 0-16m80-96h-48a8 8 0 0 0 0 16h48a8 8 0 0 0 0-16m-48-16h48a8 8 0 0 0 0-16h-48a8 8 0 0 0 0 16m48 48h-48a8 8 0 0 0 0 16h48a8 8 0 0 0 0-16m0 32h-48a8 8 0 0 0 0 16h48a8 8 0 0 0 0-16m0 32h-48a8 8 0 0 0 0 16h48a8 8 0 0 0 0-16");
}
</style><path class="oqak5z8wn"/>`,
		"fallback": "ph:equalizer",
	});
}

export default Component;
