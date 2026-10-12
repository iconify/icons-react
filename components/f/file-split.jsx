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
		"content": `<style>.eyapz-l0t {
  d: path("M13.75 2.75v3.5a2 2 0 0 0 2 2h3.5M12 10v1.25c0 2-2.75 2-2.75 4v3.25M12 11.25c0 2 2.75 2 2.75 4v3.25M8 17.25l1.25 1.25l1.25-1.25m3 0l1.25 1.25L16 17.25");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.jz9wy2bsc {
  d: path("M13.75 2.75h-6.5a2.5 2.5 0 0 0-2.5 2.5v13.5a2.5 2.5 0 0 0 2.5 2.5h9.5a2.5 2.5 0 0 0 2.5-2.5V8.25Z");
}
</style><g class="hntgybcog"><path class="jz9wy2bsc"/><path class="eyapz-l0t"/></g>`,
		"fallback": "iconoven:file-split",
	});
}

export default Component;
