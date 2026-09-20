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

.tj2c-nb2i {
  d: path("M8 8h4l4 4 -4 4H8Z");
}

.ugdbidcqi {
  d: path("M16.23 2.94a10 10 0 1 1 -8.46 0");
}

.woqkegr2j {
  fill: currentColor;
  d: path("M8 8h4l4 4 -4 4H8Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.xa771-t-o {
  fill: currentColor;
  d: path("M16.23 2.94a10 10 0 1 1 -8.46 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}
</style><g class="hntgybcog"><path class="xa771-t-o"/><path class="woqkegr2j"/><path class="ugdbidcqi"/><path class="tj2c-nb2i"/></g>`,
		"fallback": "iconmind:agent-tag-duotone-thin",
	});
}

export default Component;
