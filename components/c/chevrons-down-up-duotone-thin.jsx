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
		"content": `<style>.dx0l4abna {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("m7 4 5 5 5 -5");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.eev_c9mlp {
  d: path("m7 20 5 -5 5 5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.p8a7rmkzk {
  d: path("m7 4 5 5 5 -5");
}

.r4v0xr3qy {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("m7 20 5 -5 5 5");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="hntgybcog"><path class="dx0l4abna"/><path class="r4v0xr3qy"/><path class="p8a7rmkzk"/><path class="eev_c9mlp"/></g>`,
		"fallback": "iconmind:chevrons-down-up-duotone-thin",
	});
}

export default Component;
