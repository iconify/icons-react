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
		"content": `<style>.fbschg62a {
  d: path("m15 5 -7 7 7 7");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.kafa4eb3l {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("m15 5 -7 7 7 7");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="hntgybcog"><path class="kafa4eb3l"/><path class="fbschg62a"/></g>`,
		"fallback": "iconmind:chevron-left-duotone-thin",
	});
}

export default Component;
