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
		"content": `<style>.kh4ezpcdq {
  d: path("M12 14v-3.5m0 1c0-2 1.5-3 3.5-3c0 2-1.5 3-3.5 3Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.wqt8-tw3f {
  d: path("M2.5 14h19v6h-19Zm1-2.75V9.5a4 4 0 0 1 4-4h9a4 4 0 0 1 4 4v1.75M8.75 14v6m6.5-6v6");
}
</style><g class="ulnmmdpxh"><path class="wqt8-tw3f"/><path class="kh4ezpcdq"/></g>`,
		"fallback": "uix-sharp:germination-tray",
	});
}

export default Component;
