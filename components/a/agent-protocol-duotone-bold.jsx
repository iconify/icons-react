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
		"content": `<style>.dgsf1rbel {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("m12 14.5 2.5 -2.5");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.gedzti5ut {
  d: path("m12 14.5 2.5 -2.5");
}

.gnioxz0xf {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M19.27 15.28a3 3 0 1 1 -2.54 0");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.h5t6wxitw {
  d: path("M9.5 12 12 9.5");
}

.h7k_twb0c {
  d: path("M7.27 3.28a3 3 0 1 1 -2.54 0");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.xb0ugqbkt {
  d: path("M19.27 15.28a3 3 0 1 1 -2.54 0");
}

.y678484zh {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M9.5 12 12 9.5");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.ydkocbbew {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M7.27 3.28a3 3 0 1 1 -2.54 0");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="s0phu2bbs"><path class="ydkocbbew"/><path class="gnioxz0xf"/><path class="y678484zh"/><path class="dgsf1rbel"/><path class="h7k_twb0c"/><path class="xb0ugqbkt"/><path class="h5t6wxitw"/><path class="gedzti5ut"/></g>`,
		"fallback": "iconmind:agent-protocol-duotone-bold",
	});
}

export default Component;
