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

.t_sbvu3iq {
  d: path("M12 14h4");
}

.yxow7abeb {
  fill: currentColor;
  d: path("M13 3H6v18h12V8");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.zz1qmoher {
  d: path("m8 9 2.5 2.5L8 14");
}
</style><g class="hntgybcog"><path class="yxow7abeb"/><path class="abnm6smsv"/><path class="zz1qmoher"/><path class="t_sbvu3iq"/></g>`,
		"fallback": "iconmind:changelog-generate-duotone-thin",
	});
}

export default Component;
