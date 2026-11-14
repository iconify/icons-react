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
		"content": `<style>.r8ykmib5y {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 20c-4.5-3-5.5-5.25-5.5-7.25s1.4-3.5 3.25-3.5c1 0 1.75.5 2.25 1.25c.5-.75 1.25-1.25 2.25-1.25c1.85 0 3.25 1.5 3.25 3.5S16.5 17 12 20Zm0-17v3.5M4.5 6l1.75 1.75M19.5 6l-1.75 1.75M2.5 13H4m17.5 0H20");
}
</style><path class="r8ykmib5y"/>`,
		"fallback": "uix-sharp:heart-burst",
	});
}

export default Component;
