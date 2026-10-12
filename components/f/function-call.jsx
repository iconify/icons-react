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
		"content": `<style>.rt3e4vala {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M11 4H9.5A2.5 2.5 0 0 0 7 6.5V20m-3-9.75h6m5.25-2.75c-1.4 1.4-2 2.9-2 4.5s.6 3.1 2 4.5m3.5-9c1.4 1.4 2 2.9 2 4.5s-.6 3.1-2 4.5");
}
</style><path class="rt3e4vala"/>`,
		"fallback": "iconoven:function-call",
	});
}

export default Component;
