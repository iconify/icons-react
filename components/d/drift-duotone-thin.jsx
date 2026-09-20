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
		"content": `<style>.f-7mi-ili {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M3 12h9l6 -6");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.f33exibub {
  d: path("M3 12h9l6 -6");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.klhc1wvwx {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("m12 12 6 6");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.sj9rw9tzk {
  d: path("m12 12 6 6");
}
</style><g class="hntgybcog"><path class="f-7mi-ili"/><path class="klhc1wvwx"/><path class="f33exibub"/><path class="sj9rw9tzk"/></g>`,
		"fallback": "iconmind:drift-duotone-thin",
	});
}

export default Component;
