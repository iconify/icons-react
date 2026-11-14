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
		"content": `<style>.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.vjappnlzm {
  d: path("M12.2 19H3V3.5h17v8.6M3 8.5h17m-11-5l-2 5m8-5l-2 5");
}

.x7mrh_k-j {
  d: path("m18.5 14.5l3.5 1.25v2.5c0 2-1.5 3.25-3.5 3.75c-2-.5-3.5-1.75-3.5-3.75v-2.5Z");
}
</style><g class="ulnmmdpxh"><path class="vjappnlzm"/><path class="x7mrh_k-j"/></g>`,
		"fallback": "uix-sharp:film-insurance",
	});
}

export default Component;
