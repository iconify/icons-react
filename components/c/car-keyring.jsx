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

.imjny6bmj {
  d: path("M13.25 10za4 4 0 0 1 4 4v3.5a4 4 0 0 1-4 4a4 4 0 0 1-4-4V14a4 4 0 0 1 4-4");
}

.rsdevn95w {
  d: path("M6.75 6.5a3.75 3.75 0 1 0 7.5 0a3.75 3.75 0 1 0-7.5 0m6.5 7.5h.01m-.01 3.5h.01");
}
</style><g class="hntgybcog"><path class="imjny6bmj"/><path class="rsdevn95w"/></g>`,
		"fallback": "uix:car-keyring",
	});
}

export default Component;
