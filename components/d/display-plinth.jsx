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
		"content": `<style>.ewcflrb1y {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4 2.5h16v3H4Zm2.5 3h11V19h-11ZM5 19h14v2.5H5Zm9.5-13.5V19");
}
</style><path class="ewcflrb1y"/>`,
		"fallback": "uix-sharp:display-plinth",
	});
}

export default Component;
