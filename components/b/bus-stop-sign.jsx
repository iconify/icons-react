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
		"content": `<style>.i885kf40m {
  d: path("M5 2.5h14V15H5ZM12 15v6.5m-3 0h6");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.x1xl17e_f {
  d: path("M8.5 5.5h7V12h-7Zm0 3.25h7");
}
</style><g class="ulnmmdpxh"><path class="i885kf40m"/><path class="x1xl17e_f"/></g>`,
		"fallback": "uix-sharp:bus-stop-sign",
	});
}

export default Component;
