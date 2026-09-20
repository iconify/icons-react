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
		"content": `<style>.abnm6smsv {
  d: path("M13 3H6v18h12V8");
}

.aum97lbyp {
  d: path("M9 13h4");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.jlfjgzbqx {
  d: path("M9 9h6");
}

.o9fi6qz7l {
  d: path("M11 21a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}

.pa9quik2g {
  d: path("M12 16v3");
}
</style><g class="hntgybcog"><path class="abnm6smsv"/><path class="jlfjgzbqx"/><path class="aum97lbyp"/><path class="pa9quik2g"/><path class="o9fi6qz7l"/></g>`,
		"fallback": "iconmind:alert-rule-outline-thin",
	});
}

export default Component;
