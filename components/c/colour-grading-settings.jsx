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
		"content": `<style>.bv3bjiqph {
  d: path("M10 7a4.5 4.5 0 1 0 9 0a4.5 4.5 0 1 0-9 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.isykqw53a {
  d: path("M5 7a4.5 4.5 0 1 0 9 0a4.5 4.5 0 1 0-9 0");
}

.ov21uh15z {
  d: path("M7.5 11.25a4.5 4.5 0 1 0 9 0a4.5 4.5 0 1 0-9 0m-4 8.5h4m0 0a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0m3.5 0h9.5");
}
</style><g class="hntgybcog"><path class="isykqw53a"/><path class="bv3bjiqph"/><path class="ov21uh15z"/></g>`,
		"fallback": "uix:colour-grading-settings",
	});
}

export default Component;
