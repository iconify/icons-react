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
		"content": `<style>.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.r_qdjxmin {
  d: path("M6.75 9.25h10.5q1.5 0 1.82 1.47l1.86 8.56q.32 1.47-1.18 1.47H4.25q-1.5 0-1.18-1.47l1.86-8.56q.32-1.47 1.82-1.47m1.25 0V7.5a4 4 0 0 1 8 0v1.75");
}

.z7k77gbii {
  width: 4px;
  height: 3px;
  x: 10px;
  y: 12px;
  rx: 1px;
}
</style><g class="hntgybcog"><path class="r_qdjxmin"/><rect class="z7k77gbii"/></g>`,
		"fallback": "iconoven:handbag",
	});
}

export default Component;
