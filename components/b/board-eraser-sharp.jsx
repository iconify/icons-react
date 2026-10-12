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
		"content": `<style>.wsxps__sb {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.75 5.25h14.5v6.5H4.75zm-2 6.5h18.5v5H2.75zm6-3.25h6.5m-10.5 12h4m3 0h7.5");
}
</style><path class="wsxps__sb"/>`,
		"fallback": "iconoven:board-eraser-sharp",
	});
}

export default Component;
