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

.iwhulrnfp {
  d: path("M6.75 6.5v.01m10.5-.01v.01M2.75 10h18.5m-18.5 5.75h18.5");
}

.nq_e_2b0z {
  width: 3.5px;
  height: 17.75px;
  x: 5px;
  y: 3.5px;
  rx: 1px;
}

.nzx-9lahs {
  width: 3.5px;
  height: 17.75px;
  x: 15.5px;
  y: 3.5px;
  rx: 1px;
}
</style><g class="hntgybcog"><rect class="nq_e_2b0z"/><rect class="nzx-9lahs"/><path class="iwhulrnfp"/></g>`,
		"fallback": "iconoven:fence-wooden",
	});
}

export default Component;
