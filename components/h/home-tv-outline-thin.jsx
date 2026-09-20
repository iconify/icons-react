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

.jwnes9bsk {
  d: path("M8 19h8");
}

.mjfvqdb6k {
  d: path("M3 5v11h18V5Z");
}

.pa9quik2g {
  d: path("M12 16v3");
}
</style><g class="hntgybcog"><path class="mjfvqdb6k"/><path class="pa9quik2g"/><path class="jwnes9bsk"/></g>`,
		"fallback": "iconmind:home-tv-outline-thin",
	});
}

export default Component;
