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
		"content": `<style>.dbgvcxwad {
  cx: 12px;
  cy: 12px;
  r: 9.25px;
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.xdq0lk2hd {
  d: path("m12.65 6.38l3.9 2.25l.65.37v6l-.65.38l-3.9 2.25L12 18l-.65-.37l-3.9-2.25L6.8 15V9l.65-.37l3.9-2.25L12 6zM12 12V6.75M12 12l4.55 2.63M12 12l-4.55 2.63");
}
</style><g class="x2cwu0gfd"><circle class="dbgvcxwad"/><path class="xdq0lk2hd"/></g>`,
		"fallback": "iconoven:crypto-coin-sharp",
	});
}

export default Component;
