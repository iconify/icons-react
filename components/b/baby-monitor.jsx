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
		"content": `<style>.o5ooob6cb {
  d: path("M3 6h9.5v15H3Zm4.5 0V2.75");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.zhafahbpf {
  d: path("M5.75 13.5a2 2 0 1 0 4 0a2 2 0 1 0-4 0Zm10.25-3a4.5 4.5 0 0 1 0 6M19 8a8 8 0 0 1 0 11");
}
</style><g class="ulnmmdpxh"><path class="o5ooob6cb"/><path class="zhafahbpf"/></g>`,
		"fallback": "uix-sharp:baby-monitor",
	});
}

export default Component;
