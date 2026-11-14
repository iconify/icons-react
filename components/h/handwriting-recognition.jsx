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
		"content": `<style>.lzqb5ywgz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m11.125 14.625l.513-1.539A1.5 1.5 0 0 1 12 12.5l5.689-5.689a1.5 1.5 0 0 1 2.122 0l.378.378a1.5 1.5 0 0 1 0 2.122L14.5 15a1.5 1.5 0 0 1-.586.362l-1.539.513a.988.988 0 0 1-1.25-1.25m.625-1.875l2.5 2.5M2.5 18.5c1.25-2.75 2.75-2.75 3.25-.5s2 2.5 3 1");
}
</style><path class="lzqb5ywgz"/>`,
		"fallback": "uix:handwriting-recognition",
	});
}

export default Component;
