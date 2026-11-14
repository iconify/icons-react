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
		"content": `<style>.ny9927kwz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4 10.5h16v11H4ZM12 8v2.5m-.628-7.661l.097-.792h1.062l.097.792l.929.537l.734-.312l.532.92l-.638.479v1.074l.638.479l-.532.92l-.734-.312l-.929.537l-.097.792h-1.062l-.097-.792l-.929-.537l-.734.312l-.532-.92l.638-.479V4.463l-.638-.479l.532-.92l.734.312ZM9 15.75h.01m5.99 0h.01");
}
</style><path class="ny9927kwz"/>`,
		"fallback": "uix-sharp:dependency-bot",
	});
}

export default Component;
