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
		"content": `<style>.cic9bggnc {
  d: path("M5.5 3H7v16.5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V3h1.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.lafs_4bqt {
  d: path("M9.75 13a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0");
}
</style><g class="hntgybcog"><path class="cic9bggnc"/><path class="lafs_4bqt"/></g>`,
		"fallback": "uix:gas-jar",
	});
}

export default Component;
