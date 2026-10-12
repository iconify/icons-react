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
		"content": `<style>.cfvax_ben {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7.25 3.25v9.25m-.75 0h11M11 8.75h9M8.75 12.5L6.5 21.25m8.75-8.75l2.25 8.75M7.46 17.5h9.08");
}
</style><path class="cfvax_ben"/>`,
		"fallback": "iconoven:high-chair-sharp",
	});
}

export default Component;
