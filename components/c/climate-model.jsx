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
		"content": `<style>.bbmxtubgr {
  d: path("M7.5 12a4.5 9.5 0 1 0 9 0a4.5 9.5 0 1 0-9 0Z");
}

.hh5eoik7u {
  d: path("M3.75 8q8.25 3 16.5 0m-16.5 8q8.25 3 16.5 0");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.zdgu3ybil {
  d: path("M2.5 12a9.5 9.5 0 1 0 19 0a9.5 9.5 0 1 0-19 0Z");
}
</style><g class="ulnmmdpxh"><path class="zdgu3ybil"/><path class="bbmxtubgr"/><path class="hh5eoik7u"/></g>`,
		"fallback": "uix-sharp:climate-model",
	});
}

export default Component;
