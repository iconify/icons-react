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
		"content": `<style>.bwgoc24_g {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M12 8a4 4 0 0 1 0 8");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.cs--63jny {
  d: path("M12 2a10 10 0 1 1 -7.07 2.93");
}

.dfyu8bbyd {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M12 5a7 7 0 1 1 -7 7");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ihvx16biv {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M12 2a10 10 0 1 1 -7.07 2.93");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.m5e7pz7_z {
  d: path("M12 8a4 4 0 0 1 0 8");
}

.n6apnpbtf {
  d: path("M12 5a7 7 0 1 1 -7 7");
}
</style><g class="hntgybcog"><path class="bwgoc24_g"/><path class="dfyu8bbyd"/><path class="ihvx16biv"/><path class="m5e7pz7_z"/><path class="n6apnpbtf"/><path class="cs--63jny"/></g>`,
		"fallback": "iconmind:chart-radial-duotone-thin",
	});
}

export default Component;
