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
		"content": `<style>.iau37ab1m {
  d: path("M2.5 3.5h19v13h-19Zm9.5 13v4m-4 0h8");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.usxtr3n-h {
  d: path("M9.5 6.25h5v7.5h-5Zm0 3.75h5");
}
</style><g class="ulnmmdpxh"><path class="iau37ab1m"/><path class="usxtr3n-h"/></g>`,
		"fallback": "uix-sharp:fault-code",
	});
}

export default Component;
