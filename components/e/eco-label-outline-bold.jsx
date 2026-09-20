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
		"content": `<style>.egda5-rke {
  d: path("M10.5 13.5c0 -4.2 2.8 -7 7 -7 0 4.2 -2.8 7 -7 7");
}

.pywr_yykw {
  d: path("m4 12 8 -8h8v8l-8 8Z");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}
</style><g class="s0phu2bbs"><path class="pywr_yykw"/><path class="egda5-rke"/></g>`,
		"fallback": "iconmind:eco-label-outline-bold",
	});
}

export default Component;
