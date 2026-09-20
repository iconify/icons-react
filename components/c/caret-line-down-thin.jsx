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
		"content": `<style>.tgp-tubdy {
  fill: currentColor;
  d: path("M45.17 74.83a4 4 0 0 1 5.66-5.66L128 146.34l77.17-77.17a4 4 0 1 1 5.66 5.66l-80 80a4 4 0 0 1-5.66 0ZM208 188H48a4 4 0 0 0 0 8h160a4 4 0 0 0 0-8");
}
</style><path class="tgp-tubdy"/>`,
		"fallback": "ph:caret-line-down-thin",
	});
}

export default Component;
