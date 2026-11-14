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
		"content": `<style>.xhb4cqblk {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m8 2.5l-4.75 19M16 2.5l4.75 19m-14.5-12h11.5m-12.25 3h13m-13.75 3h14.5M12 2.5v4m0 12v3");
}
</style><path class="xhb4cqblk"/>`,
		"fallback": "uix-sharp:cattle-grid",
	});
}

export default Component;
