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
		"content": `<style>.esfnhoa8a {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M9.5 12 12 9.5");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.gedzti5ut {
  d: path("m12 14.5 2.5 -2.5");
}

.h5t6wxitw {
  d: path("M9.5 12 12 9.5");
}

.h7k_twb0c {
  d: path("M7.27 3.28a3 3 0 1 1 -2.54 0");
}

.hkuw2gg3p {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("m12 14.5 2.5 -2.5");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.wu-aokb4s {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M19.27 15.28a3 3 0 1 1 -2.54 0");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.xb0ugqbkt {
  d: path("M19.27 15.28a3 3 0 1 1 -2.54 0");
}

.ycktj7b1l {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M7.27 3.28a3 3 0 1 1 -2.54 0");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="hntgybcog"><path class="ycktj7b1l"/><path class="wu-aokb4s"/><path class="esfnhoa8a"/><path class="hkuw2gg3p"/><path class="h7k_twb0c"/><path class="xb0ugqbkt"/><path class="h5t6wxitw"/><path class="gedzti5ut"/></g>`,
		"fallback": "iconmind:agent-protocol-duotone-thin",
	});
}

export default Component;
