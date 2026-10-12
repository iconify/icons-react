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
		"content": `<style>.to7aavbim {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.76 8.71c-1.78 0-2.98 1.44-2.98 3.31c0 1.7.68 2.8 1.23 4.38c.51 1.49.64 4.84 2.08 4.84c1.32 0 1.1-3.61 2.8-3.61s1.49 3.61 2.8 3.61c1.44 0 1.57-3.36 2.08-4.84c.55-1.57 1.23-2.68 1.23-4.38c0-1.87-1.19-3.31-2.98-3.31c-1.32 0-1.87.68-3.15.68s-1.83-.68-3.15-.68Zm12.99-5.96q.3 2.2 2.5 2.5q-2.2.3-2.5 2.5q-.3-2.2-2.5-2.5q2.2-.3 2.5-2.5");
}
</style><path class="to7aavbim"/>`,
		"fallback": "iconoven:first-tooth",
	});
}

export default Component;
