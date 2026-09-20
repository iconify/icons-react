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
		"content": `<style>.c46fyy1pe {
  d: path("m16 12 3 3 -3 3");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.pgcyabcdk {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M3 7h9v8h7");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.sbiy6014w {
  d: path("M3 7h9v8h7");
}

.v_45uabpq {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("m16 12 3 3 -3 3");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="hntgybcog"><path class="pgcyabcdk"/><path class="v_45uabpq"/><path class="sbiy6014w"/><path class="c46fyy1pe"/></g>`,
		"fallback": "iconmind:fallback-duotone-thin",
	});
}

export default Component;
