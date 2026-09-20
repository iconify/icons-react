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
		"content": `<style>.ct75s-bnk {
  d: path("m12 9 3 3 -3 3");
}

.h4br4z40f {
  d: path("M2 12h4");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.l__d61o9z {
  d: path("M16.5 4H19a3 3 0 0 1 3 3v10a3 3 0 0 1 -3 3h-8a3 3 0 0 1 -3 -3V7l3 -3h2.5");
}

.tus1_ob4y {
  d: path("M2 16h4");
}

.ulrt12bon {
  d: path("M2 8h4");
}
</style><g class="hntgybcog"><path class="l__d61o9z"/><path class="ulrt12bon"/><path class="h4br4z40f"/><path class="tus1_ob4y"/><path class="ct75s-bnk"/></g>`,
		"fallback": "iconmind:batch-job-outline-thin",
	});
}

export default Component;
