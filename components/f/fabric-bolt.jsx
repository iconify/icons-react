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

.nm1m4obuo {
  d: path("M6 3h12.5a3 4.5 0 0 1 0 9H6m0 0l-1.5 8.5h13l1-8.5");
}

.ud7qvmbhh {
  d: path("M3 7.5a3 4.5 0 1 0 6 0a3 4.5 0 1 0-6 0");
}
</style><g class="hntgybcog"><path class="ud7qvmbhh"/><path class="nm1m4obuo"/></g>`,
		"fallback": "uix:fabric-bolt",
	});
}

export default Component;
