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
		"content": `<style>.lcf7b8b0c {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m3.59 9.46l7.57-4.92q.84-.54 1.68 0l7.57 4.92q.84.54-.16.54H3.75q-1 0-.16-.54M7 12.5v3.75m5-3.75v3.75m5-3.75v3.75m-13.25 2.5h16.5m-17.5 2.5h18.5");
}
</style><path class="lcf7b8b0c"/>`,
		"fallback": "iconoven:government-building",
	});
}

export default Component;
