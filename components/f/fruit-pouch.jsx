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
		"content": `<style>.crrexoh6u {
  d: path("M5 20V10c0-2.25 2.5-4 5-4h4c2.5 0 5 1.75 5 4v10a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 5 20m6.5-17.5h1a1.75 1.75 0 0 1 1.75 1.75A1.75 1.75 0 0 1 12.5 6h-1a1.75 1.75 0 0 1-1.75-1.75A1.75 1.75 0 0 1 11.5 2.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.p7osp8bpw {
  d: path("M8.75 15a3.25 3.25 0 1 0 6.5 0a3.25 3.25 0 1 0-6.5 0M12 11.75l1.75-1.5");
}
</style><g class="hntgybcog"><path class="crrexoh6u"/><path class="p7osp8bpw"/></g>`,
		"fallback": "uix:fruit-pouch",
	});
}

export default Component;
