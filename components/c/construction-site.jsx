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
		"content": `<style>.pq_jgetpq {
  d: path("M17 6v7.5a2 2 0 1 1-2 2");
}

.rgasv6box {
  d: path("M2.5 6h19l-14-3.5v19m-3.5 0h7");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="rgasv6box"/><path class="pq_jgetpq"/></g>`,
		"fallback": "uix-sharp:construction-site",
	});
}

export default Component;
