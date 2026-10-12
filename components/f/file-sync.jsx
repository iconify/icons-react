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
		"content": `<style>.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.it-qfxbvy {
  d: path("M11.75 21.25h-4.5a2.5 2.5 0 0 1-2.5-2.5V5.25a2.5 2.5 0 0 1 2.5-2.5h6.5l5.5 5.5v3.5");
}

.vuo-gyb8i {
  d: path("M13.75 2.75v3.5a2 2 0 0 0 2 2h3.5m-11 4h4m2 4.75A3.25 3.25 0 0 1 20 15.25m.25-1.75v2h-2m2.5 2A3.25 3.25 0 0 1 15 19.25M14.75 21v-2h2");
}
</style><g class="hntgybcog"><path class="it-qfxbvy"/><path class="vuo-gyb8i"/></g>`,
		"fallback": "iconoven:file-sync",
	});
}

export default Component;
