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

.o85cs--je {
  d: path("M5.5 3c4.3 1.5 8.7 1.5 13 0M3.25 7h17.5c-1.6 3.25-4.8 5-8.75 5s-7.15-1.75-8.75-5m6.25 5L9 15.75M14.5 12l.5 3.75");
}

.oiwecpbpf {
  cx: 8.5px;
  cy: 18.5px;
  r: 2.75px;
}

.p_frypbys {
  cx: 15.5px;
  cy: 18.5px;
  r: 2.75px;
}
</style><g class="hntgybcog"><path class="o85cs--je"/><circle class="oiwecpbpf"/><circle class="p_frypbys"/></g>`,
		"fallback": "iconoven:eyelashes",
	});
}

export default Component;
