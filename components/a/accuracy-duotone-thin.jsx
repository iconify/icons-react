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
		"content": `<style>.e3aed6d4j {
  d: path("M14.11 7.47a5 5 0 1 1 -4.22 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ugdbidcqi {
  d: path("M16.23 2.94a10 10 0 1 1 -8.46 0");
}

.uwjz-dbef {
  d: path("m9 12 2 2 4 -4");
}

.xa771-t-o {
  fill: currentColor;
  d: path("M16.23 2.94a10 10 0 1 1 -8.46 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}
</style><g class="hntgybcog"><path class="xa771-t-o"/><path class="ugdbidcqi"/><path class="e3aed6d4j"/><path class="uwjz-dbef"/></g>`,
		"fallback": "iconmind:accuracy-duotone-thin",
	});
}

export default Component;
