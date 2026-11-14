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
		"content": `<style>.d4s81q2_f {
  d: path("M14 10.5h4a3.5 3.5 0 0 1 3.5 3.5v4a3.5 3.5 0 0 1-3.5 3.5h-4a3.5 3.5 0 0 1-3.5-3.5v-4a3.5 3.5 0 0 1 3.5-3.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.p1kgz11dz {
  d: path("M6.5 17.5v-9a2 2 0 0 1 2-2h9");
}

.wgir-2b-o {
  d: path("M2.5 13.5v-9a2 2 0 0 1 2-2h9");
}
</style><g class="hntgybcog"><path class="wgir-2b-o"/><path class="p1kgz11dz"/><path class="d4s81q2_f"/></g>`,
		"fallback": "uix:animation-frames",
	});
}

export default Component;
