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
		"content": `<style>.pf-0bccsx {
  d: path("M10.5 6A7.5 2.5 0 0 0 3 8.5v10a7.5 2.5 0 0 0 7.5 2.5Zm3-3A7.5 2.5 0 0 1 21 5.5v10a7.5 2.5 0 0 1-7.5 2.5Z");
}

.reabgpbsb {
  d: path("M3 8.5a7.5 2.5 0 0 0 7.5 2.5m3-3A7.5 2.5 0 0 0 21 5.5m-18 8a7.5 2.5 0 0 0 7.5 2.5m3-3a7.5 2.5 0 0 0 7.5-2.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="pf-0bccsx"/><path class="reabgpbsb"/></g>`,
		"fallback": "uix-sharp:database-shard",
	});
}

export default Component;
