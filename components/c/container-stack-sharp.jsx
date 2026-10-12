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
		"content": `<style>.d2nm4q56g {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 14.25h8v7h-8zm2.75 2.5v2m2.5-2v2m5.25-4.5h8v7h-8zm2.75 2.5v2m2.5-2v2m-11-14.5h9v7.5h-9zm3 2.5v2.5m3-2.5v2.5");
}
</style><path class="d2nm4q56g"/>`,
		"fallback": "iconoven:container-stack-sharp",
	});
}

export default Component;
