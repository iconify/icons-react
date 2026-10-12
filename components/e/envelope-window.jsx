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
		"content": `<style>.gvnpk2bof {
  d: path("M2.75 7L12 10l9.25-3");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.qx-dk0bsx {
  width: 8.5px;
  height: 4px;
  x: 5.75px;
  y: 12.75px;
  rx: 1px;
}

.qzkvbx_uy {
  width: 18.5px;
  height: 14.5px;
  x: 2.75px;
  y: 4.75px;
  rx: 2px;
}
</style><g class="hntgybcog"><rect class="qzkvbx_uy"/><path class="gvnpk2bof"/><rect class="qx-dk0bsx"/></g>`,
		"fallback": "iconoven:envelope-window",
	});
}

export default Component;
