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

.oju2otb9w {
  d: path("m8 15 3 3 5 -5");
}

.vyks9vbfn {
  d: path("M2 6a2 2 0 0 1 2 -2h16a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2H4a2 2 0 0 1 -2 -2Z");
}

.x26a8iq1c {
  d: path("M2 12h20");
}
</style><g class="hntgybcog"><path class="vyks9vbfn"/><path class="x26a8iq1c"/><path class="oju2otb9w"/></g>`,
		"fallback": "iconmind:check-constraint-outline-thin",
	});
}

export default Component;
