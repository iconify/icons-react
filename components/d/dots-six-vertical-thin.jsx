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
		"content": `<style>.t07umx-rc {
  fill: currentColor;
  d: path("M100 60a8 8 0 1 1-8-8a8 8 0 0 1 8 8m64 8a8 8 0 1 0-8-8a8 8 0 0 0 8 8m-72 52a8 8 0 1 0 8 8a8 8 0 0 0-8-8m72 0a8 8 0 1 0 8 8a8 8 0 0 0-8-8m-72 68a8 8 0 1 0 8 8a8 8 0 0 0-8-8m72 0a8 8 0 1 0 8 8a8 8 0 0 0-8-8");
}
</style><path class="t07umx-rc"/>`,
		"fallback": "ph:dots-six-vertical-thin",
	});
}

export default Component;
