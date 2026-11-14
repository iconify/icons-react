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
		"content": `<style>.fh_gg4rpc {
  d: path("M13 21.5H2.5v-19h19v11.2M2.5 11h19M11 11v10.5");
}

.figndx1lm {
  d: path("m6 8l3-2.25l3.5 1.5L18 5.5m0 13h.01m2.288-1.928a3 3 0 0 1 0 3.856m-4.596 0a3 3 0 0 1 0-3.856");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="fh_gg4rpc"/><path class="figndx1lm"/></g>`,
		"fallback": "uix-sharp:dashboard-live",
	});
}

export default Component;
