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

.j12d7ibbn {
  d: path("M4.75 2.75h9.5a2 2 0 0 1 2 2v5.54a6.75 6.75 0 0 0-4.49 10.96H4.75a2 2 0 0 1-2-2V4.75a2 2 0 0 1 2-2M6 7h7m-7 3.25h4.5");
}

.upu83lbfh {
  cx: 17px;
  cy: 17px;
  r: 4.25px;
}

.zk3xpabro {
  d: path("M18.12 15.66a1.75 1.75 0 1 0 0 2.68");
}
</style><g class="hntgybcog"><path class="j12d7ibbn"/><circle class="upu83lbfh"/><path class="zk3xpabro"/></g>`,
		"fallback": "iconoven:copyright-file",
	});
}

export default Component;
