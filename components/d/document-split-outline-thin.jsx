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
		"content": `<style>.bp9na9-yx {
  d: path("M10 3H4v16h6");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.vl0d0wtss {
  d: path("M14 5h6v16h-6");
}
</style><g class="hntgybcog"><path class="bp9na9-yx"/><path class="vl0d0wtss"/></g>`,
		"fallback": "iconmind:document-split-outline-thin",
	});
}

export default Component;
