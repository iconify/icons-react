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

.uvg_hhlyt {
  width: 12.75px;
  height: 8px;
  x: 2.75px;
  y: 2.75px;
  rx: 2px;
}

.wemkf6bli {
  width: 12.75px;
  height: 8px;
  x: 2.75px;
  y: 13.25px;
  rx: 2px;
}

.wvk5dhbvv {
  d: path("M19.25 3.5v14.25m-2-2l2 2l2-2");
}
</style><g class="hntgybcog"><rect class="uvg_hhlyt"/><rect class="wemkf6bli"/><path class="wvk5dhbvv"/></g>`,
		"fallback": "iconoven:feed",
	});
}

export default Component;
