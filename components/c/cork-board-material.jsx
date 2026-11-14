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

.vvuwsmbdi {
  d: path("M9.5 7h5l-1 3l1.5 2H9l1.5-2Zm2.5 5v3.5m-5 2h.01M17 17h.01");
}

.x1aay2bno {
  d: path("M3 4h18v17H3Z");
}
</style><g class="ulnmmdpxh"><path class="x1aay2bno"/><path class="vvuwsmbdi"/></g>`,
		"fallback": "uix-sharp:cork-board-material",
	});
}

export default Component;
