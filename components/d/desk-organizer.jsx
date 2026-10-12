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
		"content": `<style>.ez8p-cc0k {
  width: 18.5px;
  height: 9px;
  x: 2.75px;
  y: 12.25px;
  rx: 2px;
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.rdt2v9b_u {
  d: path("M9.75 12.25v9");
}

.tuj06lbif {
  d: path("m5 12.25l-.75-7m3.5 7l.75-5.5m2.5 5.5v-7.5a1 1 0 0 1 1-1h6.25a1 1 0 0 1 1 1v7.5");
}
</style><g class="hntgybcog"><path class="tuj06lbif"/><rect class="ez8p-cc0k"/><path class="rdt2v9b_u"/></g>`,
		"fallback": "iconoven:desk-organizer",
	});
}

export default Component;
