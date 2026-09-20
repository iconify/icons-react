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
		"content": `<style>.ce-48-bek {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("m16 4 5 5 -5 5");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.f8wj1yoym {
  d: path("M21 9H7v11");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.s1ev1ubdz {
  d: path("m16 4 5 5 -5 5");
}

.s8lfmtbgm {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M21 9H7v11");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="hntgybcog"><path class="ce-48-bek"/><path class="s8lfmtbgm"/><path class="s1ev1ubdz"/><path class="f8wj1yoym"/></g>`,
		"fallback": "iconmind:forward-duotone-thin",
	});
}

export default Component;
