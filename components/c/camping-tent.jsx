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
		"content": `<style>.fuu4qgbtd {
  d: path("M2.75 21.25c0-8.25 4.25-15 9.25-15s9.25 6.75 9.25 15Z");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.npdy5mwti {
  d: path("M12 9.75c-1.5 3-2.25 6.25-2.25 11.5h4.5c0-5.25-.75-8.5-2.25-11.5m0-3.5V3.5l2 .75");
}
</style><g class="hntgybcog"><path class="fuu4qgbtd"/><path class="npdy5mwti"/></g>`,
		"fallback": "iconoven:camping-tent",
	});
}

export default Component;
