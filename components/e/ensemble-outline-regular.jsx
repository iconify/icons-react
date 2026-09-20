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
		"content": `<style>.liucm7_ra {
  d: path("m7 13 3 3 -3 3 -3 -3Z");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.tv_y06bgj {
  d: path("m12 3 3 3 -3 3 -3 -3Z");
}

.uxl9_oo-x {
  d: path("m17 13 3 3 -3 3 -3 -3Z");
}
</style><g class="nrj6p8qat"><path class="tv_y06bgj"/><path class="liucm7_ra"/><path class="uxl9_oo-x"/></g>`,
		"fallback": "iconmind:ensemble-outline-regular",
	});
}

export default Component;
