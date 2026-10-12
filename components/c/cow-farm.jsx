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
		"content": `<style>.ogc36kbhf {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7.5 8.5h5c0 2.25-1.1 3.75-2.5 3.75s-2.5-1.5-2.5-3.75");
}

.qir7ovodz {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M19.25 8.75h.01");
}

.qtbgken8h {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.5 8.5H15L17 6h2.5a1.75 1.75 0 0 1 1.75 1.75v3.75A1.25 1.25 0 0 1 20 12.75h-2.5V14a2 2 0 0 1-2 2h-10a2.25 2.25 0 0 1-2.25-2.25v-3A2.25 2.25 0 0 1 5.5 8.5M6 16v5.25M9.25 16v5.25M12.5 16v5.25m3-5.25v5.25M17.75 6l-.5-2.25m-14 6.5l-.5 3.25");
}

.y9tr6bcfx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><g class="y9tr6bcfx"><path class="qtbgken8h"/><path class="ogc36kbhf"/><path class="qir7ovodz"/></g>`,
		"fallback": "iconoven:cow-farm",
	});
}

export default Component;
