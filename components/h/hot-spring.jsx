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
		"content": `<style>.gut1adcxl {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8.25 17.75a6.5 2.75 0 1 0 13 0a6.5 2.75 0 1 0-13 0M2.82 19.7l.11-1.15q.07-.8.58-1.41l.23-.28q.51-.61 1.13-.11h.01q.62.5.68 1.3l.13 1.65q.06.8-.74.8h-1.4q-.8 0-.73-.8m8.93-7.7c-1-1-1-2 0-3s1-2 0-3m3 6c-1-1-1-2 0-3s1-2 0-3s1-2 0-3m3 9c-1-1-1-2 0-3s1-2 0-3");
}
</style><path class="gut1adcxl"/>`,
		"fallback": "iconoven:hot-spring",
	});
}

export default Component;
