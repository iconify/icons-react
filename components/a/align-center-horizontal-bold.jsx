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
		"content": `<style>.e1q942-il {
  fill: currentColor;
  d: path("M208 136h-68v-16h44a20 20 0 0 0 20-20V60a20 20 0 0 0-20-20h-44v-8a12 12 0 0 0-24 0v8H72a20 20 0 0 0-20 20v40a20 20 0 0 0 20 20h44v16H48a20 20 0 0 0-20 20v40a20 20 0 0 0 20 20h68v8a12 12 0 0 0 24 0v-8h68a20 20 0 0 0 20-20v-40a20 20 0 0 0-20-20M76 64h104v32H76Zm128 128H52v-32h152Z");
}
</style><path class="e1q942-il"/>`,
		"fallback": "ph:align-center-horizontal-bold",
	});
}

export default Component;
