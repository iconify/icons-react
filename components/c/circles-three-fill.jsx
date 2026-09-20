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
		"content": `<style>.tk28m1bge {
  fill: currentColor;
  d: path("M128 120a44 44 0 1 1 44-44a44.05 44.05 0 0 1-44 44m60 8a44 44 0 1 0 44 44a44.05 44.05 0 0 0-44-44m-120 0a44 44 0 1 0 44 44a44.05 44.05 0 0 0-44-44");
}
</style><path class="tk28m1bge"/>`,
		"fallback": "ph:circles-three-fill",
	});
}

export default Component;
