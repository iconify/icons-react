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
		"content": `<style>.in5kd7b1v {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m12.38 3.08l4.99 4.34l.38.33H6.25l.38-.33l4.99-4.34l.38-.33zM7 7.75V18M17 7.75V18M12 7.75v3.5M9.75 15h4.5l-1-.75V12.5a1.25 1.25 0 0 0-2.5 0v1.75zM7 18h10v3.25H7z");
}
</style><path class="in5kd7b1v"/>`,
		"fallback": "iconoven:bell-tower-sharp",
	});
}

export default Component;
