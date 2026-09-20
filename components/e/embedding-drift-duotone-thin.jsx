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
		"content": `<style>.d8o2etigh {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M8.5 5 11 7.5l-4 4 -4 -4L5.5 5");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.h1f2yzbjx {
  d: path("M8.5 5 11 7.5l-4 4 -4 -4L5.5 5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ohnyu1eql {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("m10 14 3 3 3 -3 3 3");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.srf482-ro {
  d: path("m10 14 3 3 3 -3 3 3");
}
</style><g class="hntgybcog"><path class="d8o2etigh"/><path class="ohnyu1eql"/><path class="h1f2yzbjx"/><path class="srf482-ro"/></g>`,
		"fallback": "iconmind:embedding-drift-duotone-thin",
	});
}

export default Component;
