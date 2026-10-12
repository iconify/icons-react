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
		"content": `<style>.aewuuhb3v {
  cx: 18.5px;
  cy: 6.25px;
  r: 2.5px;
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.qg0ecjuof {
  cx: 12px;
  cy: 18px;
  r: 2.5px;
}

.vha_j0t2o {
  cx: 5.5px;
  cy: 6.25px;
  r: 2.5px;
}
</style><g class="hntgybcog"><circle class="vha_j0t2o"/><circle class="aewuuhb3v"/><circle class="qg0ecjuof"/></g>`,
		"fallback": "iconoven:because",
	});
}

export default Component;
