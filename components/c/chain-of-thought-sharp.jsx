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
		"content": `<style>.c0yewh3tu {
  cx: 4px;
  cy: 20px;
  r: 1.25px;
}

.flkryebzx {
  d: path("M8.75 2.75h12.5v10.5H8.75z");
}

.g_r9k1kci {
  cx: 6.75px;
  cy: 15.75px;
  r: 1.75px;
}

.hshgckhyz {
  d: path("m15 5l.36 2.64L18 8l-2.64.36L15 11l-.36-2.64L12 8l2.64-.36z");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="flkryebzx"/><circle class="g_r9k1kci"/><circle class="c0yewh3tu"/><path class="hshgckhyz"/></g>`,
		"fallback": "iconoven:chain-of-thought-sharp",
	});
}

export default Component;
