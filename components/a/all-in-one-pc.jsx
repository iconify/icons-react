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
		"content": `<style>.e4se8vb4j {
  width: 18.5px;
  height: 14px;
  x: 2.75px;
  y: 3.25px;
  rx: 2.5px;
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.jpc9t8b6a {
  d: path("M2.75 13.75h18.5M10 17.25l-.75 3.5h5.5l-.75-3.5Z");
}
</style><g class="hntgybcog"><rect class="e4se8vb4j"/><path class="jpc9t8b6a"/></g>`,
		"fallback": "iconoven:all-in-one-pc",
	});
}

export default Component;
