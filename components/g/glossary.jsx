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
		"content": `<style>.g6ctus9qt {
  width: 16.5px;
  height: 18.5px;
  x: 3.75px;
  y: 2.75px;
  rx: 2.5px;
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.z-1avnupo {
  d: path("m7.25 10.5l2.25-5l2.25 5M8 9h3m-3.75 5.25h9.5m-9.5 3.25h6");
}
</style><g class="hntgybcog"><rect class="g6ctus9qt"/><path class="z-1avnupo"/></g>`,
		"fallback": "iconoven:glossary",
	});
}

export default Component;
