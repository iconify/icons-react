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
		"content": `<style>.v79ixej4q {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m8.72 5.5l1.78-1.78l.88-.88l.88.88l6.02 6.02l.88.88l-.88.88l-1.78 1.78l-.88.88l-.88-.88l-6.02-6.02l-.88-.88zm2.78 5l-7.25 7.25m8.5 3h8.5");
}
</style><path class="v79ixej4q"/>`,
		"fallback": "iconoven:auction-paddle-sharp",
	});
}

export default Component;
