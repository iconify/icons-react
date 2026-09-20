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

.hsnj9o-9y {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M3 20h18");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.jkuojibnm {
  d: path("M3 20h18");
}

.srzgk7jml {
  d: path("M3 17a9 9 0 0 1 18 0");
}

.u0jypcc9y {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M3 17a9 9 0 0 1 18 0");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.u7m7z6ojw {
  d: path("M10 14a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.z1ra8bb5p {
  fill: currentColor;
  d: path("M10 14a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}
</style><g class="hntgybcog"><path class="z1ra8bb5p"/><path class="u0jypcc9y"/><path class="hsnj9o-9y"/><path class="srzgk7jml"/><path class="jkuojibnm"/><path class="u7m7z6ojw"/></g>`,
		"fallback": "iconmind:bell-dot-duotone-thin",
	});
}

export default Component;
