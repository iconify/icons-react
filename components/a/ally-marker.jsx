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

.pkutaob1u {
  d: path("M12 21.5c-3-2.75-7.25-7-7.25-11.75a7.25 7.25 0 0 1 14.5 0c0 4.75-4.25 9-7.25 11.75");
}

.xx6pp774p {
  d: path("M10 7.5a2 2 0 1 0 4 0a2 2 0 1 0-4 0M9.5 15c0-1.5 1-2.5 2.5-2.5s2.5 1 2.5 2.5");
}
</style><g class="hntgybcog"><path class="pkutaob1u"/><path class="xx6pp774p"/></g>`,
		"fallback": "uix:ally-marker",
	});
}

export default Component;
