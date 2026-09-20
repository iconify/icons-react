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
		"content": `<style>.cdrvs4b0e {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M17.77 4.78a3 3 0 1 1 -2.54 0");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.dlfiuioca {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M8.77 4.78a3 3 0 1 1 -2.54 0");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.gsa3wh0sx {
  d: path("M17.77 4.78a3 3 0 1 1 -2.54 0");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.quu8uycwi {
  d: path("M3 14v5h18v-5");
}

.vssdnxb_k {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M3 14v5h18v-5");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.xyeuuzvcq {
  d: path("M8.77 4.78a3 3 0 1 1 -2.54 0");
}
</style><g class="nrj6p8qat"><path class="dlfiuioca"/><path class="cdrvs4b0e"/><path class="vssdnxb_k"/><path class="xyeuuzvcq"/><path class="gsa3wh0sx"/><path class="quu8uycwi"/></g>`,
		"fallback": "iconmind:agent-pool-duotone-regular",
	});
}

export default Component;
