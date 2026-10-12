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

.ilji6mbvl {
  d: path("M13.91 6.37A2.25 2.25 0 1 1 15.09 10A2.25 2.25 0 1 1 12 12.25A2.25 2.25 0 1 1 8.91 10a2.25 2.25 0 1 1 1.18-3.63a2.25 2.25 0 1 1 3.82 0");
}

.qoktzjbvh {
  d: path("M12 13.75v7.5m0-1.5C12.5 18 14.25 17 16.5 17c-.5 1.75-2.25 2.75-4.5 2.75");
}

.z-ze1jbyb {
  cx: 12px;
  cy: 9px;
  r: 1.5px;
}
</style><g class="hntgybcog"><path class="ilji6mbvl"/><circle class="z-ze1jbyb"/><path class="qoktzjbvh"/></g>`,
		"fallback": "iconoven:flower-bulb",
	});
}

export default Component;
