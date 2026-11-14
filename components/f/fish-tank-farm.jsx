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
		"content": `<style>.cppyiwbyk {
  d: path("M7.757 16.243a6 6 0 0 1 0-8.486m8.486 0a6 6 0 0 1 0 8.486");
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

.r-9jk6bep {
  d: path("M7.5 12c1.5-2.25 4.5-2.25 6 0l2-1.75v3.5l-2-1.75c-1.5 2.25-4.5 2.25-6 0");
}
</style><g class="hntgybcog"><path class="oy9aotbsd"/><path class="cppyiwbyk"/><path class="r-9jk6bep"/></g>`,
		"fallback": "uix:fish-tank-farm",
	});
}

export default Component;
