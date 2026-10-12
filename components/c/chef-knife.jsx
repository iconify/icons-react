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
		"content": `<style>.py28-uiqj {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m9 12l10.75-8.75c1-.8 1.9.1 1.25 1.1C18.5 9 15.5 12.75 12 15Zm-.74 2.76l.48.48q.64.64 0 1.28l-2.97 2.97q-.64.64-1.28 0l-.48-.48q-.64-.64 0-1.28l2.97-2.97q.64-.64 1.28 0");
}
</style><path class="py28-uiqj"/>`,
		"fallback": "iconoven:chef-knife",
	});
}

export default Component;
