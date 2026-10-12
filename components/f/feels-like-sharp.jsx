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
		"content": `<style>.so2m5-0so {
  d: path("M2.75 21.25V19a4.25 4.25 0 0 1 8.5 0v2.25Zm13-7.65V3.75h4v9.85a3 3 0 1 1-4 0Z");
}

.ttdy-b6jx {
  cx: 7px;
  cy: 7.5px;
  r: 3px;
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><circle class="ttdy-b6jx"/><path class="so2m5-0so"/></g>`,
		"fallback": "iconoven:feels-like-sharp",
	});
}

export default Component;
