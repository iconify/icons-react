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
		"content": `<style>.b8yamqbxk {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("m15 5 5 5 -5 5");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.tknbn6b9k {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M4 20V10h16");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.uhkbmlahb {
  d: path("M4 20V10h16");
}

.vmh-l_baq {
  d: path("m15 5 5 5 -5 5");
}
</style><g class="hntgybcog"><path class="tknbn6b9k"/><path class="b8yamqbxk"/><path class="uhkbmlahb"/><path class="vmh-l_baq"/></g>`,
		"fallback": "iconmind:corner-up-right-duotone-thin",
	});
}

export default Component;
