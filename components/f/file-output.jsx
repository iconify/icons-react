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
		"content": `<style>.f9xz6f0yz {
  d: path("M19.5 10.5v-2l-6-6H7A2.5 2.5 0 0 0 4.5 5v14A2.5 2.5 0 0 0 7 21.5h10a2.5 2.5 0 0 0 2.5-2.5v-.5m-8.5-4h10.5M20 13l1.5 1.5L20 16");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.qpbfohcpa {
  d: path("M13.5 2.5v4a2 2 0 0 0 2 2h4");
}
</style><g class="hntgybcog"><path class="f9xz6f0yz"/><path class="qpbfohcpa"/></g>`,
		"fallback": "uix:file-output",
	});
}

export default Component;
