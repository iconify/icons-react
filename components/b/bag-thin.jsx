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
		"content": `<style>.uq7fl6bje {
  fill: currentColor;
  d: path("M216 68h-44v-4a44 44 0 0 0-88 0v4H40a12 12 0 0 0-12 12v120a12 12 0 0 0 12 12h176a12 12 0 0 0 12-12V80a12 12 0 0 0-12-12M92 64a36 36 0 0 1 72 0v4H92Zm128 136a4 4 0 0 1-4 4H40a4 4 0 0 1-4-4V80a4 4 0 0 1 4-4h44v20a4 4 0 0 0 8 0V76h72v20a4 4 0 0 0 8 0V76h44a4 4 0 0 1 4 4Z");
}
</style><path class="uq7fl6bje"/>`,
		"fallback": "ph:bag-thin",
	});
}

export default Component;
