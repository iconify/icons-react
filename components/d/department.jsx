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
		"content": `<style>.kos_75b8g {
  d: path("M6.5 21.5v-15h3V3h5v3.5h3v15m-14 0h17M9.25 9.25h.01m2.74 0h.01m2.74 0h.01");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.xxr1ndamp {
  d: path("M9.25 12h5.5v1.5h-5.5Zm0 4.25h.01m5.49 0h.01m-4.01 5.25V19h2.5v2.5");
}
</style><g class="ulnmmdpxh"><path class="kos_75b8g"/><path class="xxr1ndamp"/></g>`,
		"fallback": "uix-sharp:department",
	});
}

export default Component;
