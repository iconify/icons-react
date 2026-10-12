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
		"content": `<style>.dbgvcxwad {
  cx: 12px;
  cy: 12px;
  r: 9.25px;
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.t4ul9t_nl {
  d: path("M12 12a.75.75 0 0 1 1.5 0A2.25 2.25 0 0 1 9 12a3.75 3.75 0 0 1 7.5 0A5.25 5.25 0 0 1 6 12");
}
</style><g class="hntgybcog"><circle class="dbgvcxwad"/><path class="t4ul9t_nl"/></g>`,
		"fallback": "iconoven:cinnamon-roll",
	});
}

export default Component;
