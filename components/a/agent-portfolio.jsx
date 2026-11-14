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
		"content": `<style>.f6o23pbuc {
  d: path("M2.5 6.5a2 2 0 0 1 2-2H9l2 2h8.5a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-15a2 2 0 0 1-2-2Z");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.osg1jbc8r {
  d: path("M10 11.25a2 2 0 1 0 4 0a2 2 0 1 0-4 0M7.5 20.5c0-3 2-4.5 4.5-4.5s4.5 1.5 4.5 4.5");
}
</style><g class="hntgybcog"><path class="f6o23pbuc"/><path class="osg1jbc8r"/></g>`,
		"fallback": "uix:agent-portfolio",
	});
}

export default Component;
