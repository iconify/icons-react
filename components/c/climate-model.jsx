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
		"content": `<style>.c38qxv3oo {
  d: path("M7.5 12a4.5 9.5 0 1 0 9 0a4.5 9.5 0 1 0-9 0");
}

.hh5eoik7u {
  d: path("M3.75 8q8.25 3 16.5 0m-16.5 8q8.25 3 16.5 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.oy9aotbsd {
  d: path("M2.5 12a9.5 9.5 0 1 0 19 0a9.5 9.5 0 1 0-19 0");
}
</style><g class="hntgybcog"><path class="oy9aotbsd"/><path class="c38qxv3oo"/><path class="hh5eoik7u"/></g>`,
		"fallback": "uix:climate-model",
	});
}

export default Component;
