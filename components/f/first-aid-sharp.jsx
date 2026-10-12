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
		"content": `<style>.kqyphdbvn {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 6.75h18.5v14.5H2.75zm6 0V3h6.5v3.75m-3.25 4v6.5M8.75 14h6.5");
}
</style><path class="kqyphdbvn"/>`,
		"fallback": "iconoven:first-aid-sharp",
	});
}

export default Component;
