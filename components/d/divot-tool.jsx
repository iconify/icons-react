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
		"content": `<style>.z7ct3186d {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M11.293 12.707za2.5 2.5 0 0 1 0 3.536l-2.829 2.828a2.5 2.5 0 0 1-3.535 0a2.5 2.5 0 0 1 0-3.535l2.828-2.829a2.5 2.5 0 0 1 3.536 0m6.01-8.839l-5.657 5.657m8.486-2.828l-5.657 5.657m-2.829-2.829l2.829 2.829m-1.414-1.415l-1.768 1.768");
}
</style><path class="z7ct3186d"/>`,
		"fallback": "uix:divot-tool",
	});
}

export default Component;
