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
		"content": `<style>.m-eck8b-v {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 20.75V9h5.5v9.5h7.5V9h5.5v12.25H2.75zm2-8.25h3.5m-3.5 3.25h3.5m7.5-3.25h3.5m-3.5 3.25h3.5m-11-7a3.75 3.75 0 0 1 7.5 0ZM12 5v3.75");
}
</style><path class="m-eck8b-v"/>`,
		"fallback": "iconoven:atrium-sharp",
	});
}

export default Component;
