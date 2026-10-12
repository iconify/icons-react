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
		"content": `<style>.bex1-ibcs {
  cx: 9.25px;
  cy: 10.5px;
  r: 2.75px;
}

.bu08xsbei {
  d: path("m3.69 5.4l4.12-1.55q.94-.35 1.88-.02l4.62 1.59q.94.33 1.88-.02l4.12-1.55q.94-.35.94.65v12.75q0 1-.94 1.35l-4.12 1.55q-.94.35-1.88.02l-4.62-1.59q-.94-.33-1.88.02l-4.12 1.55q-.94.35-.94-.65V6.75q0-1 .94-1.35");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.sgu7b2w-a {
  cx: 15.5px;
  cy: 14.25px;
  r: 1.75px;
}
</style><g class="hntgybcog"><path class="bu08xsbei"/><circle class="bex1-ibcs"/><circle class="sgu7b2w-a"/></g>`,
		"fallback": "iconoven:bubble-map",
	});
}

export default Component;
