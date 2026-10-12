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
		"content": `<style>.dgk39q_4m {
  cx: 5.5px;
  cy: 5.5px;
  r: 2.25px;
}

.e9kp5342n {
  d: path("m8.96 6.03l6.08.94M5.5 9v4.5m12.37-2.56l-.74 4.12m-8.16 2.41l4.06.56M7.76 8.17l6.48 7.66");
}

.ojoszltjo {
  cx: 5.5px;
  cy: 17px;
  r: 2.25px;
}

.tc9ytgh7v {
  cx: 18.5px;
  cy: 7.5px;
  r: 2.25px;
}

.wayizpwxs {
  cx: 16.5px;
  cy: 18.5px;
  r: 2.25px;
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><circle class="dgk39q_4m"/><circle class="tc9ytgh7v"/><circle class="ojoszltjo"/><circle class="wayizpwxs"/><path class="e9kp5342n"/></g>`,
		"fallback": "iconoven:graph-nodes-sharp",
	});
}

export default Component;
