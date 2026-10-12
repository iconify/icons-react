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
		"content": `<style>.a7ea6-o2u {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7.5 11V6.25H6.25l.43-.26l4.89-2.98l.43-.26l.43.26l4.89 2.98l.43.26H16.5v5.25h-9zm1.5.5l-1.5 9.75M15 11.5l1.5 9.75m-8.25-5h7.5m.75-7L21.25 8m-4.75 3l4.75 1.25");
}
</style><path class="a7ea6-o2u"/>`,
		"fallback": "iconoven:guard-tower-sharp",
	});
}

export default Component;
