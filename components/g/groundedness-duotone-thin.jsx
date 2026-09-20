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
		"content": `<style>.cf-dqybgk {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M4 17h16");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.duxy6wbvl {
  d: path("m7 9 4 4 6 -6");
}

.f4kv94yfp {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("m7 9 4 4 6 -6");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ok9ioqb8x {
  d: path("M4 17h16");
}
</style><g class="hntgybcog"><path class="f4kv94yfp"/><path class="cf-dqybgk"/><path class="duxy6wbvl"/><path class="ok9ioqb8x"/></g>`,
		"fallback": "iconmind:groundedness-duotone-thin",
	});
}

export default Component;
