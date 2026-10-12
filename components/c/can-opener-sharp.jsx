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
		"content": `<style>.bznlqj-xf {
  d: path("M3.75 11.75h12v9.5h-12zm0 2.75h12m-1.48-5.88l-.54-.59l-.58-.63l.63-.57l2.24-2.06l.63-.57l.58.63l.54.59l.58.63l-.63.57l-2.24 2.06l-.63.57z");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ymg6v-bdt {
  cx: 12.5px;
  cy: 9.75px;
  r: 2.25px;
}
</style><g class="x2cwu0gfd"><path class="bznlqj-xf"/><circle class="ymg6v-bdt"/></g>`,
		"fallback": "iconoven:can-opener-sharp",
	});
}

export default Component;
