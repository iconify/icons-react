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
		"content": `<style>.fx7anki8e {
  d: path("M12 16v-6");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ng35sb6yg {
  d: path("M3 16a9 9 0 0 1 18 0");
}

.ys-dg812g {
  d: path("M3 16h18");
}
</style><g class="hntgybcog"><path class="ng35sb6yg"/><path class="ys-dg812g"/><path class="fx7anki8e"/></g>`,
		"fallback": "iconmind:air-pressure-outline-thin",
	});
}

export default Component;
