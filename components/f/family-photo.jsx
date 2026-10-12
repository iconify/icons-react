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

.ks3-uu50k {
  d: path("M13.25 17.5v-.75a2.25 2.25 0 0 1 2.25-2.25a2.25 2.25 0 0 1 2.25 2.25v.75Z");
}

.menvm07vi {
  width: 18px;
  height: 16.5px;
  x: 3px;
  y: 3.75px;
  rx: 2.5px;
}

.mv3due8xc {
  cx: 9.25px;
  cy: 9.5px;
  r: 1.75px;
}

.rupd5jump {
  cx: 15.5px;
  cy: 11.5px;
  r: 1.5px;
}

.vb3-qcbjy {
  d: path("M6.25 17.5V16a3 3 0 0 1 3-3a3 3 0 0 1 3 3v1.5Z");
}
</style><g class="hntgybcog"><rect class="menvm07vi"/><circle class="mv3due8xc"/><path class="vb3-qcbjy"/><circle class="rupd5jump"/><path class="ks3-uu50k"/></g>`,
		"fallback": "iconoven:family-photo",
	});
}

export default Component;
