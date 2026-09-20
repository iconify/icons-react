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
		"content": `<style>.bj1cdqkqz {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M12 8a4 4 0 0 1 0 8");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.cs--63jny {
  d: path("M12 2a10 10 0 1 1 -7.07 2.93");
}

.d_zf2eicw {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M12 2a10 10 0 1 1 -7.07 2.93");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.kydqeu5vt {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M12 5a7 7 0 1 1 -7 7");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.m5e7pz7_z {
  d: path("M12 8a4 4 0 0 1 0 8");
}

.n6apnpbtf {
  d: path("M12 5a7 7 0 1 1 -7 7");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}
</style><g class="s0phu2bbs"><path class="bj1cdqkqz"/><path class="kydqeu5vt"/><path class="d_zf2eicw"/><path class="m5e7pz7_z"/><path class="n6apnpbtf"/><path class="cs--63jny"/></g>`,
		"fallback": "iconmind:chart-radial-duotone-bold",
	});
}

export default Component;
