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
		"content": `<style>.g-pgc9j9t {
  d: path("M10 15a5.5 5.5 0 1 0 11 0a5.5 5.5 0 1 0-11 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.jp0unjmdf {
  fill: currentColor;
  d: path("M12 10.75a5.5 5.5 0 0 1 2 3.5a5.5 5.5 0 0 1-4 0a5.5 5.5 0 0 1 2-3.5");
}

.o05bagdfy {
  d: path("M3 15a5.5 5.5 0 1 0 11 0a5.5 5.5 0 1 0-11 0");
}

.o1cps1bqz {
  d: path("M6.5 9a5.5 5.5 0 1 0 11 0a5.5 5.5 0 1 0-11 0");
}
</style><g class="hntgybcog"><path class="o1cps1bqz"/><path class="o05bagdfy"/><path class="g-pgc9j9t"/><path class="jp0unjmdf"/></g>`,
		"fallback": "uix:colour-mixing-light",
	});
}

export default Component;
