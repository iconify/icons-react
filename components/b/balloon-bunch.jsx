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
		"content": `<style>.ckdeowbwc {
  cx: 12px;
  cy: 6px;
  r: 3.25px;
}

.eumxs70ky {
  cx: 6px;
  cy: 12.75px;
  r: 3px;
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.orvilebhc {
  d: path("m6 15.75l6 5.5m6-5.5l-6 5.5m0-12v12");
}

.w3k3zt4wy {
  cx: 18px;
  cy: 12.75px;
  r: 3px;
}
</style><g class="hntgybcog"><circle class="eumxs70ky"/><circle class="w3k3zt4wy"/><circle class="ckdeowbwc"/><path class="orvilebhc"/></g>`,
		"fallback": "iconoven:balloon-bunch",
	});
}

export default Component;
