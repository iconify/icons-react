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

.kp327jbpy {
  d: path("M20 16.5V20h-3.5");
}

.o5r_prbgx {
  d: path("M2 5a3 3 0 1 0 6 0 3 3 0 1 0 -6 0");
}

.pc79hvbyu {
  d: path("M9.5 9.5 16 16");
}
</style><g class="hntgybcog"><path class="o5r_prbgx"/><path class="pc79hvbyu"/><path class="kp327jbpy"/></g>`,
		"fallback": "iconmind:action-step-outline-thin",
	});
}

export default Component;
