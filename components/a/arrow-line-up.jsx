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
		"content": `<style>.yik6gubgm {
  fill: currentColor;
  d: path("M205.66 138.34a8 8 0 0 1-11.32 11.32L136 91.31V224a8 8 0 0 1-16 0V91.31l-58.34 58.35a8 8 0 0 1-11.32-11.32l72-72a8 8 0 0 1 11.32 0ZM216 32H40a8 8 0 0 0 0 16h176a8 8 0 0 0 0-16");
}
</style><path class="yik6gubgm"/>`,
		"fallback": "ph:arrow-line-up",
	});
}

export default Component;
