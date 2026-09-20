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
		"content": `<style>.atoje4bsc {
  d: path("M2 6h20");
}

.e2r0vmbrh {
  d: path("M4 6v5h5v4h5v4h6");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.jttv79b0k {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M20 18.5V21");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.kpiqhd6nn {
  d: path("M20 18.5V21");
}

.rzbhhg_xy {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M2 6h20");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.vl001wbav {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M4 6v5h5v4h5v4h6");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="hntgybcog"><path class="rzbhhg_xy"/><path class="vl001wbav"/><path class="jttv79b0k"/><path class="atoje4bsc"/><path class="e2r0vmbrh"/><path class="kpiqhd6nn"/></g>`,
		"fallback": "iconmind:basement-duotone-thin",
	});
}

export default Component;
