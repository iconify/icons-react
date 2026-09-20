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
		"content": `<style>.csu0owb4a {
  d: path("M9.5 17h5");
}

.e10tuqb4v {
  d: path("M5.4 15a6.6 6.6 0 0 1 13.2 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.pemn838wn {
  d: path("M9 6a3 3 0 1 0 6 0 3 3 0 1 0 -6 0");
}

.xg3pq9szd {
  d: path("M12 14.5v5");
}
</style><g class="hntgybcog"><path class="pemn838wn"/><path class="e10tuqb4v"/><path class="xg3pq9szd"/><path class="csu0owb4a"/></g>`,
		"fallback": "iconmind:doctor-outline-thin",
	});
}

export default Component;
