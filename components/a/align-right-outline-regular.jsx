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
		"content": `<style>.kp3vwzbyx {
  d: path("M6 18h15");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.tee3b-ble {
  d: path("M10 12h11");
}

.xgrfb-bqu {
  d: path("M3 6h18");
}
</style><g class="nrj6p8qat"><path class="xgrfb-bqu"/><path class="tee3b-ble"/><path class="kp3vwzbyx"/></g>`,
		"fallback": "iconmind:align-right-outline-regular",
	});
}

export default Component;
