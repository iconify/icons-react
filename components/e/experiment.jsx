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
		"content": `<style>.ru_30hssv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7.75 4.25h3.5v5.1l4.35 8.1a2.25 2.25 0 0 1-1.95 3.35h-8.3a2.25 2.25 0 0 1-1.95-3.35l4.35-8.1ZM6.25 15h6.5M17.5 2.75q.45 3.3 3.75 3.75q-3.3.45-3.75 3.75q-.45-3.3-3.75-3.75q3.3-.45 3.75-3.75");
}
</style><path class="ru_30hssv"/>`,
		"fallback": "iconoven:experiment",
	});
}

export default Component;
