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
		"content": `<style>.ivu6q2fwq {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m7.06 11.32l.88-1.89l.31-.68h7.5l.31.68l.88 1.89l.31.68H6.75zM7.5 6a5 2.5 0 0 1 9 0m0 0l.25-2m-.25 2l-2 .25");
}

.ofu2-v9yz {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M16.25 16.75h.01");
}

.ux2u0rbkq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
}

.ve_2bzbxd {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 12h18.5v9.25H2.75zM6 16.75h4");
}
</style><g class="ux2u0rbkq"><path class="ve_2bzbxd"/><path class="ofu2-v9yz"/><path class="ivu6q2fwq"/></g>`,
		"fallback": "iconoven:centrifuge-med-sharp",
	});
}

export default Component;
