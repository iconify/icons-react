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
		"content": `<style>.f6hvs0xbl {
  cx: 19.5px;
  cy: 8.25px;
  r: 1.25px;
}

.n6d5k17px {
  cx: 15.75px;
  cy: 4.5px;
  r: 1.5px;
}

.v9nx8b8mb {
  d: path("M7.25 13.5a4.75 4.75 0 0 1 9.5 0Zm-4.5 0h18.5V15A6.25 6.25 0 0 1 15 21.25H9A6.25 6.25 0 0 1 2.75 15Z");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="v9nx8b8mb"/><circle class="n6d5k17px"/><circle class="f6hvs0xbl"/></g>`,
		"fallback": "iconoven:bath-bomb-sharp",
	});
}

export default Component;
