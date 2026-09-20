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
		"content": `<style>.duoozeegh {
  fill: currentColor;
  d: path("M128 20a108 108 0 1 0 108 108A108.12 108.12 0 0 0 128 20m0 192a84 84 0 1 1 84-84a84.09 84.09 0 0 1-84 84m32.49-92.49a12 12 0 0 1 0 17l-40 40a12 12 0 0 1-17-17L135 128l-31.49-31.51a12 12 0 0 1 17-17Z");
}
</style><path class="duoozeegh"/>`,
		"fallback": "ph:caret-circle-right-bold",
	});
}

export default Component;
