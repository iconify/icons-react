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
		"content": `<style>.cvv3d2bhk {
  d: path("M4.5 7.5V5A2.5 2.5 0 0 1 7 2.5h1.5m3 0h2L16 5m3.5 6.5v3m0 3V19a2.5 2.5 0 0 1-2.5 2.5h-1.5m-5 0h3m-5 0H7A2.5 2.5 0 0 1 4.5 19v-1.5m0-7v4");
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
</style><g class="hntgybcog"><path class="cvv3d2bhk"/><path class="qpbfohcpa"/></g>`,
		"fallback": "uix:file-dashed",
	});
}

export default Component;
