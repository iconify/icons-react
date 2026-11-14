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
		"content": `<style>.vaklnkb2a {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7 4.75h10V21.5H7Zm3 0V3h4v1.75M12 8v3m-1.5-1.5h3m-3 7.5h3");
}
</style><path class="vaklnkb2a"/>`,
		"fallback": "uix-sharp:battery-cell",
	});
}

export default Component;
