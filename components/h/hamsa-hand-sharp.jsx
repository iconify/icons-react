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
		"content": `<style>.vdw_o-baj {
  d: path("M5.75 15V9.25h2.5v1.25V5h2.5v1.25v-2.5h2.5v2.5V5h2.5v5.5v-1.25h2.5V15c0 3.5-2.75 6-6.25 6s-6.25-2.5-6.25-6Zm2.5-4.5v2.25m2.5-6.5v4.5m2.5-4.5v4.5m2.5-.25v2.25");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.xbtxneucs {
  d: path("M8.75 15.75c1.75-2.25 4.75-2.25 6.5 0c-1.75 2.25-4.75 2.25-6.5 0Z");
}
</style><g class="x2cwu0gfd"><path class="vdw_o-baj"/><path class="xbtxneucs"/></g>`,
		"fallback": "iconoven:hamsa-hand-sharp",
	});
}

export default Component;
