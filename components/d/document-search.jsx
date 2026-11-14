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
		"content": `<style>.dn86afb-u {
  d: path("M4.5 4A1.5 1.5 0 0 1 6 2.5h7.5l5 5V20a1.5 1.5 0 0 1-1.5 1.5H6A1.5 1.5 0 0 1 4.5 20Z");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.rgryj-bri {
  d: path("M13.5 2.5v5h5M8 6.5h3M7.5 14a3.5 3.5 0 1 0 7 0a3.5 3.5 0 1 0-7 0m6 2.5l1.75 1.75");
}
</style><g class="hntgybcog"><path class="dn86afb-u"/><path class="rgryj-bri"/></g>`,
		"fallback": "uix:document-search",
	});
}

export default Component;
