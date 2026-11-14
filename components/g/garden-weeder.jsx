import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.swt6eebln {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9.682 14.318za2 2 0 0 1 0 2.828l-3.536 3.536a2 2 0 0 1-2.828 0a2 2 0 0 1 0-2.828l3.536-3.536a2 2 0 0 1 2.828 0m.068-.068l3.75-3.75m0 0l2-2L17 3m-1.5 5.5L21 7");
}
</style><path class="swt6eebln"/>`,
		"fallback": "uix:garden-weeder",
	});
}

export default Component;
