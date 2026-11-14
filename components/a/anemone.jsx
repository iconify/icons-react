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
		"content": `<style>.c8uh-xb5z {
  d: path("M14.5 8a3 3 0 1 1 2.25 4a3 3 0 1 1-2.25 4a3 3 0 1 1-5 0a3 3 0 1 1-2.25-4A3 3 0 1 1 9.5 8a3 3 0 1 1 5 0");
}

.fv5pcnpmp {
  d: path("M10 12a2 2 0 1 0 4 0a2 2 0 1 0-4 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="hntgybcog"><path class="c8uh-xb5z"/><path class="fv5pcnpmp"/></g>`,
		"fallback": "uix:anemone",
	});
}

export default Component;
