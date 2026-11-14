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
		"content": `<style>.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.zdgu3ybil {
  d: path("M2.5 12a9.5 9.5 0 1 0 19 0a9.5 9.5 0 1 0-19 0Z");
}

.zxztbqbbp {
  d: path("M4.5 6.25Q8 9.5 12 8q4 1.5 7.5-1.75M2.5 13h19");
}
</style><g class="ulnmmdpxh"><path class="zdgu3ybil"/><path class="zxztbqbbp"/></g>`,
		"fallback": "uix-sharp:ice-cap",
	});
}

export default Component;
