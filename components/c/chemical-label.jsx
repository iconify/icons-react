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
		"content": `<style>.gdv7puubu {
  d: path("m13.061 12.061l1.378 1.378a1.5 1.5 0 0 1 0 2.122l-1.378 1.378a1.5 1.5 0 0 1-2.122 0l-1.378-1.378a1.5 1.5 0 0 1 0-2.122l1.378-1.378a1.5 1.5 0 0 1 2.122 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.tcm1-8vxk {
  d: path("M10 2.5h4v5.25a7 7 0 1 1-4 0Z");
}
</style><g class="hntgybcog"><path class="tcm1-8vxk"/><path class="gdv7puubu"/></g>`,
		"fallback": "uix:chemical-label",
	});
}

export default Component;
