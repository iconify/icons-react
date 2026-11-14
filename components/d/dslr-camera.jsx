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
		"content": `<style>.d-df17bwy {
  d: path("M11.5 14a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0m-6-4v8");
}

.fp9-oacfk {
  d: path("M8.75 14a4.25 4.25 0 1 0 8.5 0a4.25 4.25 0 1 0-8.5 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.r5er8yuno {
  d: path("M4.5 7h5L11 3.5h4L16.5 7h3a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-15a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2");
}
</style><g class="hntgybcog"><path class="r5er8yuno"/><path class="fp9-oacfk"/><path class="d-df17bwy"/></g>`,
		"fallback": "uix:dslr-camera",
	});
}

export default Component;
