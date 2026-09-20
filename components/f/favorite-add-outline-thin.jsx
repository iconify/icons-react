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
		"content": `<style>.ba1a252is {
  d: path("M17.5 4.5h4");
}

.g1ah3gb0p {
  d: path("M19.5 2.5v4");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.jk_0h-bxq {
  d: path("M4 11a4 4 0 0 1 8 0 4 4 0 0 1 8 0l-8 8Z");
}
</style><g class="hntgybcog"><path class="jk_0h-bxq"/><path class="ba1a252is"/><path class="g1ah3gb0p"/></g>`,
		"fallback": "iconmind:favorite-add-outline-thin",
	});
}

export default Component;
