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
		"content": `<style>.aotnjcbls {
  d: path("M4 13h7");
}

.gmngh8b8n {
  d: path("m18 5 3.5 3.5a3.5 3.5 0 1 1 -7 0Z");
}

.h4kqfjbnm {
  d: path("M2 9a2 2 0 0 1 2 -2h7a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2H4a2 2 0 0 1 -2 -2Z");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="hntgybcog"><path class="h4kqfjbnm"/><path class="aotnjcbls"/><path class="gmngh8b8n"/></g>`,
		"fallback": "iconmind:blood-sugar-outline-thin",
	});
}

export default Component;
