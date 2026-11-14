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

.pwbyrptkf {
  d: path("M4 5v7a8 2.5 0 0 0 16 0V5M4 15v3.75a8 2.5 0 0 0 2.25 1.75m3 .5a8 2.5 0 0 0 5.5 0m3-.5A8 2.5 0 0 0 20 18.75V15");
}

.r49h2x16e {
  d: path("M4 5a8 2.5 0 1 0 16 0A8 2.5 0 1 0 4 5");
}
</style><g class="hntgybcog"><path class="r49h2x16e"/><path class="pwbyrptkf"/></g>`,
		"fallback": "uix:database-truncate",
	});
}

export default Component;
