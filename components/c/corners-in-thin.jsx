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
		"content": `<style>.ks7waxkql {
  fill: currentColor;
  d: path("M156 96V48a4 4 0 0 1 8 0v44h44a4 4 0 0 1 0 8h-48a4 4 0 0 1-4-4m-60 60H48a4 4 0 0 0 0 8h44v44a4 4 0 0 0 8 0v-48a4 4 0 0 0-4-4m112 0h-48a4 4 0 0 0-4 4v48a4 4 0 0 0 8 0v-44h44a4 4 0 0 0 0-8M96 44a4 4 0 0 0-4 4v44H48a4 4 0 0 0 0 8h48a4 4 0 0 0 4-4V48a4 4 0 0 0-4-4");
}
</style><path class="ks7waxkql"/>`,
		"fallback": "ph:corners-in-thin",
	});
}

export default Component;
