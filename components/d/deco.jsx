import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.gsj5t9b9o {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24 2h-.1l.1 21.14a1.13 1.13 0 0 1 0 2.26a1.14 1.14 0 0 1-1.14-1.13a1.14 1.14 0 0 1 .89-1.11L19.57 2.48A21.87 21.87 0 1 0 24 2");
}
</style><path class="gsj5t9b9o"/>`,
		"fallback": "arcticons:deco",
	});
}

export default Component;
