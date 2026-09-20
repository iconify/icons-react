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
		"content": `<style>.faeydrb7z {
  d: path("m15 6 6 6 -6 6");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.onei9bb8c {
  d: path("m9 6 -6 6 6 6");
}
</style><g class="hntgybcog"><path class="onei9bb8c"/><path class="faeydrb7z"/></g>`,
		"fallback": "iconmind:code-outline-thin",
	});
}

export default Component;
