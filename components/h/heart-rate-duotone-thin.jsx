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

.hy2-9ybvg {
  d: path("M2 13h6l2 -2 4 4 2 -2h6");
}

.mfnyebcbu {
  fill: currentColor;
  d: path("M4 10a4 4 0 0 1 8 0 4 4 0 0 1 8 0l-8 8Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.sy4eus42g {
  d: path("M4 10a4 4 0 0 1 8 0 4 4 0 0 1 8 0l-8 8Z");
}
</style><g class="hntgybcog"><path class="mfnyebcbu"/><path class="sy4eus42g"/><path class="hy2-9ybvg"/></g>`,
		"fallback": "iconmind:heart-rate-duotone-thin",
	});
}

export default Component;
