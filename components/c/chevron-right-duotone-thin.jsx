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
		"content": `<style>.h50l5vbte {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("m9 5 7 7 -7 7");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.mcepj1byz {
  d: path("m9 5 7 7 -7 7");
}
</style><g class="hntgybcog"><path class="h50l5vbte"/><path class="mcepj1byz"/></g>`,
		"fallback": "iconmind:chevron-right-duotone-thin",
	});
}

export default Component;
