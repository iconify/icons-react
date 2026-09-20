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
		"content": `<style>.z2gqeccjf {
  fill: currentColor;
  d: path("M46 46v164h34a6 6 0 0 1 0 12H40a6 6 0 0 1-6-6V40a6 6 0 0 1 6-6h40a6 6 0 0 1 0 12Zm170-12h-40a6 6 0 0 0 0 12h34v164h-34a6 6 0 0 0 0 12h40a6 6 0 0 0 6-6V40a6 6 0 0 0-6-6");
}
</style><path class="z2gqeccjf"/>`,
		"fallback": "ph:brackets-square-light",
	});
}

export default Component;
