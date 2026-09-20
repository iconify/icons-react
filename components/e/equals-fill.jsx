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
		"content": `<style>.hwr6invyd {
  fill: currentColor;
  d: path("M208 32H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16m-24 128H72a8 8 0 0 1 0-16h112a8 8 0 0 1 0 16m0-48H72a8 8 0 0 1 0-16h112a8 8 0 0 1 0 16");
}
</style><path class="hwr6invyd"/>`,
		"fallback": "ph:equals-fill",
	});
}

export default Component;
