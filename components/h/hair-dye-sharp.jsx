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
		"content": `<style>.n_h3-0bct {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m13 8.25l5.75-5.5m-5.67 6.58l-1.16-1.16l-.42-.42l-.42.42l-1.16 1.16l-.42.42l.42.42l1.16 1.16l.42.42l.42-.42l1.16-1.16l.42-.42zM2.75 14h14.5a7.25 7.25 0 0 1-14.5 0ZM6 17h8");
}
</style><path class="n_h3-0bct"/>`,
		"fallback": "iconoven:hair-dye-sharp",
	});
}

export default Component;
