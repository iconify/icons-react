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
		"content": `<style>.ebnh4k68h {
  d: path("M14 2h5a3 3 0 0 1 3 3v3a3 3 0 0 1 -3 3H5a3 3 0 0 1 -3 -3V5l3 -3h5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.kl5egs07h {
  d: path("M9.5 12.5 12 15l2.5 -2.5");
}

.l_gek2obk {
  d: path("M6 19.75a2.25 2.25 0 0 1 2.25 -2.25h7.5A2.25 2.25 0 0 1 18 19.75 2.25 2.25 0 0 1 15.75 22h-7.5A2.25 2.25 0 0 1 6 19.75");
}

.o208i442c {
  d: path("M12 11v2.5");
}

.q94oxce_c {
  fill: currentColor;
  d: path("M6 19.75a2.25 2.25 0 0 1 2.25 -2.25h7.5A2.25 2.25 0 0 1 18 19.75 2.25 2.25 0 0 1 15.75 22h-7.5A2.25 2.25 0 0 1 6 19.75");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.yy1murbkh {
  fill: currentColor;
  d: path("M14 2h5a3 3 0 0 1 3 3v3a3 3 0 0 1 -3 3H5a3 3 0 0 1 -3 -3V5l3 -3h5");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}
</style><g class="hntgybcog"><path class="yy1murbkh"/><path class="q94oxce_c"/><path class="ebnh4k68h"/><path class="o208i442c"/><path class="kl5egs07h"/><path class="l_gek2obk"/></g>`,
		"fallback": "iconmind:cpu-offload-duotone-thin",
	});
}

export default Component;
