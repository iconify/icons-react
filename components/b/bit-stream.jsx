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
		"content": `<style>.jr2cgkbzf {
  fill: currentColor;
  d: path("M2.5 9.75H7v4.5H2.5Z");
}

.le1-9kbko {
  d: path("M9.75 9.75h4.5v4.5h-4.5ZM17 12h4.5M19 9.5l2.5 2.5l-2.5 2.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="jr2cgkbzf"/><path class="le1-9kbko"/></g>`,
		"fallback": "uix-sharp:bit-stream",
	});
}

export default Component;
