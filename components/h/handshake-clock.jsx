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
		"content": `<style>.a6k62accz {
  d: path("M18 16.5V18l1.25 1");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.xssf36xar {
  d: path("M2.5 4.5H5v7H2.5m19-7H19v7h2.5M5 5.5l4.5-2h4L19 6v4l-6.5 4L5 10.5Zm4.5-2l5 5m.25 9.5a3.25 3.25 0 1 0 6.5 0a3.25 3.25 0 1 0-6.5 0Z");
}
</style><g class="ulnmmdpxh"><path class="xssf36xar"/><path class="a6k62accz"/></g>`,
		"fallback": "uix-sharp:handshake-clock",
	});
}

export default Component;
