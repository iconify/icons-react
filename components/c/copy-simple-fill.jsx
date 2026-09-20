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
		"content": `<style>.obq7nxvaz {
  fill: currentColor;
  d: path("M192 72v144a8 8 0 0 1-8 8H40a8 8 0 0 1-8-8V72a8 8 0 0 1 8-8h144a8 8 0 0 1 8 8m24-40H72a8 8 0 0 0 0 16h136v136a8 8 0 0 0 16 0V40a8 8 0 0 0-8-8");
}
</style><path class="obq7nxvaz"/>`,
		"fallback": "ph:copy-simple-fill",
	});
}

export default Component;
