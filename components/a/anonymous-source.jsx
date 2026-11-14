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
		"content": `<style>.enzqy_ond {
  d: path("M9 11a3 3.75 0 1 0 6 0a3 3.75 0 1 0-6 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.zfqqr8bin {
  d: path("M3.5 21.5V20c0-2.5 1.5-4 2.5-4.5V10c0-4 3-6.5 6-7.5c3 1 6 3.5 6 7.5v5.5c1 .5 2.5 2 2.5 4.5v1.5Z");
}
</style><g class="hntgybcog"><path class="zfqqr8bin"/><path class="enzqy_ond"/></g>`,
		"fallback": "uix:anonymous-source",
	});
}

export default Component;
