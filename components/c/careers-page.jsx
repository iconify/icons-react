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
		"content": `<style>.fd9eo1hza {
  d: path("M7.5 12.25h9v5.5h-9Zm2.75 0v-1a1 1 0 0 1 1-1h1.5a1 1 0 0 1 1 1v1");
}

.nb5so4yij {
  d: path("M2.5 3.5h19v17h-19Zm0 4h19");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="nb5so4yij"/><path class="fd9eo1hza"/></g>`,
		"fallback": "uix-sharp:careers-page",
	});
}

export default Component;
