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
		"content": `<style>.b1kobinmz {
  d: path("M6.75 2.75v12.5a2 2 0 0 0 2 2h12.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.pw5240eqf {
  d: path("M2.75 6.75h12.5a2 2 0 0 1 2 2v12.5");
}

.wxrlulnmd {
  d: path("m9.66 13.87l1.93-2.99q.41-.63.82 0l1.93 2.99q.41.63-.34.63h-4q-.75 0-.34-.63");
}
</style><g class="hntgybcog"><path class="b1kobinmz"/><path class="pw5240eqf"/><path class="wxrlulnmd"/></g>`,
		"fallback": "iconoven:crop-photo",
	});
}

export default Component;
