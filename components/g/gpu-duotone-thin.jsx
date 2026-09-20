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
		"content": `<style>.a9xazx6hn {
  d: path("M14 6h5a3 3 0 0 1 3 3v6a3 3 0 0 1 -3 3H5a3 3 0 0 1 -3 -3V9l3 -3h5");
}

.bou-hgelm {
  fill: currentColor;
  d: path("M5 12a3 3 0 1 0 6 0 3 3 0 1 0 -6 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.coi-np7dk {
  d: path("M15 9v6");
}

.fs7w_vboi {
  fill: currentColor;
  d: path("M14 6h5a3 3 0 0 1 3 3v6a3 3 0 0 1 -3 3H5a3 3 0 0 1 -3 -3V9l3 -3h5");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.o19v3ublc {
  d: path("M5 12a3 3 0 1 0 6 0 3 3 0 1 0 -6 0");
}

.x2sfcqbvg {
  d: path("M18 9v6");
}
</style><g class="hntgybcog"><path class="fs7w_vboi"/><path class="bou-hgelm"/><path class="a9xazx6hn"/><path class="o19v3ublc"/><path class="coi-np7dk"/><path class="x2sfcqbvg"/></g>`,
		"fallback": "iconmind:gpu-duotone-thin",
	});
}

export default Component;
