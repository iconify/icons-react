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
		"content": `<style>.h_nwhmbey {
  d: path("M15.75 3.75v3a2 2 0 0 0 2 2h3M5.25 6v13M2.75 8.25v8.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.r05pbczar {
  d: path("M15.75 3.75h-5a2.5 2.5 0 0 0-2.5 2.5v12.5a2.5 2.5 0 0 0 2.5 2.5h7.5a2.5 2.5 0 0 0 2.5-2.5v-10Z");
}
</style><g class="hntgybcog"><path class="r05pbczar"/><path class="h_nwhmbey"/></g>`,
		"fallback": "iconoven:file-version",
	});
}

export default Component;
