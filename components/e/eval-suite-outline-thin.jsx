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

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.szhhdzb0g {
  d: path("m8 9 2 2 4 -4");
}

.y86-9om1v {
  d: path("m8 15 2 2 4 -4");
}
</style><g class="hntgybcog"><path class="abnm6smsv"/><path class="szhhdzb0g"/><path class="y86-9om1v"/></g>`,
		"fallback": "iconmind:eval-suite-outline-thin",
	});
}

export default Component;
