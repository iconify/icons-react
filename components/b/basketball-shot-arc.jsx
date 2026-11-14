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
		"content": `<style>.eoz5drbdg {
  d: path("M6 15a6 6 0 1 0 12 0a6 6 0 1 0-12 0m0 0h12");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.l3sl83idz {
  d: path("M7.75 10.75q4.25 4.25 0 8.5m8.5-8.5q-4.25 4.25 0 8.5");
}

.yqr-j6b6i {
  d: path("M3 11a9.5 9.5 0 0 1 18 0");
}
</style><g class="hntgybcog"><path class="eoz5drbdg"/><path class="l3sl83idz"/><path class="yqr-j6b6i"/></g>`,
		"fallback": "uix:basketball-shot-arc",
	});
}

export default Component;
