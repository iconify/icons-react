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
		"content": `<style>.gjdhpublh {
  d: path("M3 3.5h18v11q-9 6.5-18 0Zm3 13v3m3-2v3m3-2.75v3m3-3.25v3m3-4v3");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.i0gevzbow {
  d: path("m13.158 7.906l1.557 1.89a1.5 1.5 0 0 1 0 1.908l-1.557 1.89a1.5 1.5 0 0 1-2.316 0l-1.557-1.89a1.5 1.5 0 0 1 0-1.908l1.557-1.89a1.5 1.5 0 0 1 2.316 0");
}
</style><g class="hntgybcog"><path class="gjdhpublh"/><path class="i0gevzbow"/></g>`,
		"fallback": "uix:embroidered-shawl",
	});
}

export default Component;
