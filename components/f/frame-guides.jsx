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
		"content": `<style>.v2mb3frio {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 5h19v14h-19Zm6.25 0v14m6.5-14v14M2.5 9.75h19m-19 4.5h19");
}
</style><path class="v2mb3frio"/>`,
		"fallback": "uix-sharp:frame-guides",
	});
}

export default Component;
