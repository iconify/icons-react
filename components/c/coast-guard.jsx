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
		"content": `<style>.a-41lbb4s {
  d: path("M11.65 2.88a1 1 0 0 1 .7 0l6.5 2.4a1 1 0 0 1 .65.94v5.28c0 4.75-3.25 8.25-7.5 9.75c-4.25-1.5-7.5-5-7.5-9.75V6.22a1 1 0 0 1 .65-.94Z");
}

.e-96d5m4i {
  d: path("m7.45 12.09l9.35-4.28q.45-.21.45.29v2q0 .5-.45.71l-8.6 3.93q-.45.21-.59-.27l-.47-1.69q-.14-.48.31-.69m2.05 4.96l7.7-3.6");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="hntgybcog"><path class="a-41lbb4s"/><path class="e-96d5m4i"/></g>`,
		"fallback": "iconoven:coast-guard",
	});
}

export default Component;
