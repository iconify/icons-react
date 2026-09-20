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
		"content": `<style>.ap8xb2bzp {
  fill: currentColor;
  d: path("M136 68h-4V32a12 12 0 0 0-20.49-8.49l-96 96a12 12 0 0 0 0 17l96 96A12 12 0 0 0 132 224v-36h4a12 12 0 0 0 12-12V80a12 12 0 0 0-12-12m-12 96h-4a12 12 0 0 0-12 12v19l-67-67l67-67v19a12 12 0 0 0 12 12h4Zm104-84v96a12 12 0 0 1-24 0V80a12 12 0 0 1 24 0m-40 0v96a12 12 0 0 1-24 0V80a12 12 0 0 1 24 0");
}
</style><path class="ap8xb2bzp"/>`,
		"fallback": "ph:arrow-fat-lines-left-bold",
	});
}

export default Component;
