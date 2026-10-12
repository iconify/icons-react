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
		"content": `<style>.ap4_t9bxe {
  d: path("m3.06 20.51l3.63-8.77Q7 11 7.8 11h8.4q.8 0 1.11.74l3.63 8.77q.31.74-.49.74H3.55q-.8 0-.49-.74m5.94.74L10.5 11M15 21.25L13.5 11");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.zgosk9b6o {
  cx: 17.75px;
  cy: 5.25px;
  r: 2.5px;
}
</style><g class="hntgybcog"><circle class="zgosk9b6o"/><path class="ap4_t9bxe"/></g>`,
		"fallback": "iconoven:fallow-field",
	});
}

export default Component;
