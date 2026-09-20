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

.iv4i1_brv {
  d: path("M9 9.5h3");
}

.kq20kb-1c {
  d: path("M9 6.5h6");
}
</style><g class="hntgybcog"><path class="abnm6smsv"/><path class="kq20kb-1c"/><path class="iv4i1_brv"/></g>`,
		"fallback": "iconmind:header-request-outline-thin",
	});
}

export default Component;
