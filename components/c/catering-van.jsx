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
		"content": `<style>.aztl26bvm {
  d: path("M2.5 16.5V7A1.5 1.5 0 0 1 4 5.5h11v11Zm12.5-7h3.5l3 3.5v3.5H15");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.jgpgpfb9n {
  d: path("M5 18.5a2 2 0 1 0 4 0a2 2 0 1 0-4 0m10.5 0a2 2 0 1 0 4 0a2 2 0 1 0-4 0m-9-5.5a2.5 2.5 0 0 1 5 0Z");
}
</style><g class="hntgybcog"><path class="aztl26bvm"/><path class="jgpgpfb9n"/></g>`,
		"fallback": "uix:catering-van",
	});
}

export default Component;
