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
		"content": `<style>.be2j7zbfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5 3.5h3.5v17.75H5zm10.5 0H19v17.75h-3.5zm-8.75 3v.01m10.5-.01v.01M2.75 10h18.5m-18.5 5.75h18.5");
}
</style><path class="be2j7zbfd"/>`,
		"fallback": "iconoven:fence-wooden-sharp",
	});
}

export default Component;
