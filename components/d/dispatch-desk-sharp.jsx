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
		"content": `<style>.cmdxz9tvh {
  d: path("M10 10.5h11.25v7.75H10zm3.5 3.75h4.25m-2.25 4v2.5m-2.75 0h5.5");
}

.p-1-pbcvs {
  d: path("M4.25 11.5v-2a3.75 3.75 0 0 1 7.5 0v1m-9 1h3V16h-3zm1.5 4.5v3.25h3");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="cmdxz9tvh"/><path class="p-1-pbcvs"/></g>`,
		"fallback": "iconoven:dispatch-desk-sharp",
	});
}

export default Component;
