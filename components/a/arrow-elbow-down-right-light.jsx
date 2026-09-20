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
		"content": `<style>.xhagcebtn {
  fill: currentColor;
  d: path("m220.24 180.24l-48 48a6 6 0 0 1-8.48-8.48L201.51 182H72a6 6 0 0 1-6-6V32a6 6 0 0 1 12 0v138h123.51l-37.75-37.76a6 6 0 1 1 8.48-8.48l48 48a6 6 0 0 1 0 8.48");
}
</style><path class="xhagcebtn"/>`,
		"fallback": "ph:arrow-elbow-down-right-light",
	});
}

export default Component;
