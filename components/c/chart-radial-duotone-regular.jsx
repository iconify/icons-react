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
		"content": `<style>.c2e-h-5fm {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M12 2a10 10 0 1 1 -7.07 2.93");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.cs--63jny {
  d: path("M12 2a10 10 0 1 1 -7.07 2.93");
}

.m5e7pz7_z {
  d: path("M12 8a4 4 0 0 1 0 8");
}

.n6apnpbtf {
  d: path("M12 5a7 7 0 1 1 -7 7");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.xdag91qde {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M12 8a4 4 0 0 1 0 8");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.zslwg06gt {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M12 5a7 7 0 1 1 -7 7");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="nrj6p8qat"><path class="xdag91qde"/><path class="zslwg06gt"/><path class="c2e-h-5fm"/><path class="m5e7pz7_z"/><path class="n6apnpbtf"/><path class="cs--63jny"/></g>`,
		"fallback": "iconmind:chart-radial-duotone-regular",
	});
}

export default Component;
