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

.i6je34bet {
  d: path("M12 2.75C15.75 7 18.5 10.5 18.5 14a6.5 6.5 0 0 1-13 0c0-3.5 2.75-7 6.5-11.25");
}

.vdzhrqbnt {
  d: path("M8.5 14.5c1.15-.75 2.35-.75 3.5 0s2.35.75 3.5 0a3.5 3.5 0 0 1-7 0");
}
</style><g class="hntgybcog"><path class="i6je34bet"/><path class="vdzhrqbnt"/></g>`,
		"fallback": "iconoven:hydration-drop",
	});
}

export default Component;
