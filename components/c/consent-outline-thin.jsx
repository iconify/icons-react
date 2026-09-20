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

.ns_05qbai {
  d: path("m9 11 2 2 4 -4");
}

.qtxvlht3c {
  d: path("M8 17h8");
}
</style><g class="hntgybcog"><path class="abnm6smsv"/><path class="ns_05qbai"/><path class="qtxvlht3c"/></g>`,
		"fallback": "iconmind:consent-outline-thin",
	});
}

export default Component;
