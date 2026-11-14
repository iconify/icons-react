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
		"content": `<style>.o5fz7980p {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m7.5 6l3.772-2.095a1.5 1.5 0 0 1 1.456 0L16.5 6a1.334 1.334 0 0 1-.648 2.5H8.148A1.334 1.334 0 0 1 7.5 6M6 11v7m4-7v7m4-7v7m4-7v7M3.5 20.5h17");
}
</style><path class="o5fz7980p"/>`,
		"fallback": "uix:governance",
	});
}

export default Component;
