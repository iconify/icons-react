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
		"content": `<style>.ebovp7bpp {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("m10 6 -5 5h4l-5 5");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.l9-vpjbes {
  d: path("m13 14 2.5 2.5L20 12");
}

.ro9lombns {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("m13 14 2.5 2.5L20 12");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.v-jogvb5z {
  d: path("m10 6 -5 5h4l-5 5");
}
</style><g class="hntgybcog"><path class="ebovp7bpp"/><path class="ro9lombns"/><path class="v-jogvb5z"/><path class="l9-vpjbes"/></g>`,
		"fallback": "iconmind:event-check-duotone-thin",
	});
}

export default Component;
