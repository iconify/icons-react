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
		"content": `<style>.ciz9k0bxi {
  d: path("M8 19a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.gvmyg7bww {
  d: path("M2 5a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.l0cxbsbji {
  d: path("M8 5a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.llakqobuk {
  d: path("M11 12a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.n-059ea3n {
  d: path("M5 12a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.rckmicclj {
  d: path("M14 5a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}
</style><g class="hntgybcog"><path class="gvmyg7bww"/><path class="l0cxbsbji"/><path class="rckmicclj"/><path class="n-059ea3n"/><path class="llakqobuk"/><path class="ciz9k0bxi"/></g>`,
		"fallback": "iconmind:cohort-ai-outline-thin",
	});
}

export default Component;
