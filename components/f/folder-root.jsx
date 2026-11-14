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

.siiwx6b2g {
  d: path("m8.512 12.052l2.5-2.188a1.5 1.5 0 0 1 1.976 0l2.5 2.188A1.5 1.5 0 0 1 16 13.181V15.5a1.5 1.5 0 0 1-1.5 1.5h-5A1.5 1.5 0 0 1 8 15.5v-2.319a1.5 1.5 0 0 1 .512-1.129");
}

.tavlno-ue {
  d: path("M3 6a2 2 0 0 1 2-2h4.5l2 2H19a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z");
}
</style><g class="hntgybcog"><path class="tavlno-ue"/><path class="siiwx6b2g"/></g>`,
		"fallback": "uix:folder-root",
	});
}

export default Component;
