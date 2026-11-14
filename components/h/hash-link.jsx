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
		"content": `<style>.if8ngn2us {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m6.5 3l-.75 9m4.75-9l-.75 9M3 6h9.5M2.75 9.25H12m.75 6.25H12a2.5 2.5 0 0 0 0 5h.75m3.5-5H17a2.5 2.5 0 0 1 0 5h-.75M12.5 18h4");
}
</style><path class="if8ngn2us"/>`,
		"fallback": "uix:hash-link",
	});
}

export default Component;
