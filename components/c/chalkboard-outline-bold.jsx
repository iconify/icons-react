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
		"content": `<style>.gkj6vbuly {
  d: path("M2 5a2 2 0 0 1 2 -2h16a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2H4a2 2 0 0 1 -2 -2Z");
}

.kwxihke4k {
  d: path("M7 9h8");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.ui32hib9b {
  d: path("M5 20h14");
}

.wf6qyfbld {
  d: path("M7 13h5");
}
</style><g class="s0phu2bbs"><path class="gkj6vbuly"/><path class="ui32hib9b"/><path class="kwxihke4k"/><path class="wf6qyfbld"/></g>`,
		"fallback": "iconmind:chalkboard-outline-bold",
	});
}

export default Component;
