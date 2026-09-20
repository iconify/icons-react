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
		"content": `<style>.a6uqj4bsu {
  d: path("M8 16v5");
}

.d4rfzbb0c {
  d: path("M6 8a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.hhh6epqom {
  d: path("M4 5a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v9a2 2 0 0 1 -2 2H6a2 2 0 0 1 -2 -2Z");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.kt9b9ab5p {
  d: path("M13 9h4");
}

.sxlwlmkmh {
  d: path("M4 12h16");
}

.xep6ynbds {
  d: path("M16 16v5");
}
</style><g class="hntgybcog"><path class="hhh6epqom"/><path class="sxlwlmkmh"/><path class="d4rfzbb0c"/><path class="kt9b9ab5p"/><path class="a6uqj4bsu"/><path class="xep6ynbds"/></g>`,
		"fallback": "iconmind:boiler-outline-thin",
	});
}

export default Component;
