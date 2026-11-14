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
		"content": `<style>.iy88962zk {
  d: path("M5.5 12V9.5H9m9.5 2.5v2.5H15");
}

.rea3x2bzc {
  d: path("M2.5 6.5h19v11h-19Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="rea3x2bzc"/><path class="iy88962zk"/></g>`,
		"fallback": "uix-sharp:aspect-16-9",
	});
}

export default Component;
