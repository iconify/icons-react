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
		"content": `<style>.bt_2bvgpa {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M3 19h18");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.d73irqbjb {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M5 19v-7l3 -3");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.efk3feo1w {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M16 19v-7l3 -3");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.giopbjb9g {
  d: path("M5 19v-7l3 -3");
}

.h_alycbda {
  d: path("M10 19v-9l3 -3");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.lb5uptbbe {
  d: path("M16 19v-7l3 -3");
}

.lpyhhqy-h {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M10 19v-9l3 -3");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.rkhcgsbdl {
  d: path("M3 19h18");
}
</style><g class="hntgybcog"><path class="d73irqbjb"/><path class="lpyhhqy-h"/><path class="efk3feo1w"/><path class="bt_2bvgpa"/><path class="giopbjb9g"/><path class="h_alycbda"/><path class="lb5uptbbe"/><path class="rkhcgsbdl"/></g>`,
		"fallback": "iconmind:grass-duotone-thin",
	});
}

export default Component;
