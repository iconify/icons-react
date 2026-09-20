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
		"content": `<style>.ag9m5ebdy {
  d: path("M12 7v13");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.kbx4e0uoh {
  d: path("M17 15a5 5 0 0 1 -10 0");
}

.l0zc9ibud {
  d: path("M8 10h8");
}

.ymw3aibdo {
  d: path("M10 5a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}
</style><g class="hntgybcog"><path class="ymw3aibdo"/><path class="ag9m5ebdy"/><path class="l0zc9ibud"/><path class="kbx4e0uoh"/></g>`,
		"fallback": "iconmind:durable-object-outline-thin",
	});
}

export default Component;
