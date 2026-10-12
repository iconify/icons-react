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

.hvgdv64iz {
  cx: 12px;
  cy: 13px;
  r: 1.75px;
}

.kb2br0g3d {
  width: 12.5px;
  height: 4px;
  x: 5.75px;
  y: 17.25px;
  rx: 2px;
}

.vkj93pbwb {
  d: path("M3.75 13a8.25 8.25 0 0 1 16.5 0m-7.18-1.38L15.5 8.5");
}
</style><g class="hntgybcog"><path class="vkj93pbwb"/><circle class="hvgdv64iz"/><rect class="kb2br0g3d"/></g>`,
		"fallback": "iconoven:ai-cost-meter",
	});
}

export default Component;
