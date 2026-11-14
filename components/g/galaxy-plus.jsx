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
		"content": `<style>.dwdcjxbxu {
  d: path("M12.5 10a3 5.5 0 0 0-3-5.5a7 11 0 0 0-7 11M18 15v6m-3-3h6");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.pqpfchbrz {
  d: path("M8.5 10a3 5.5 0 0 0 3 5.5a7 11 0 0 0 7-11");
}

.yd7fhdbdc {
  d: path("M8.5 10a2 2 0 1 0 4 0a2 2 0 1 0-4 0");
}
</style><g class="hntgybcog"><path class="yd7fhdbdc"/><path class="pqpfchbrz"/><path class="dwdcjxbxu"/></g>`,
		"fallback": "uix:galaxy-plus",
	});
}

export default Component;
