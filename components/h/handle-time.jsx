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
		"content": `<style>.sbezkcbzn {
  d: path("M19.5 14.75v1l-3 4.5v1");
}

.sd2ihsbnr {
  d: path("M4.75 9.25a6.75 6.75 0 0 1 13.5 0m-15.75 0H7v6H2.5Zm13.5 2.7v-2.7h4.5v2.7m-15.75 3.3v1.25a3 3 0 0 0 3 3h2.75m5-4.75h5m-5 6.5h5m-4-6.5v1l3 4.5v1");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="sd2ihsbnr"/><path class="sbezkcbzn"/></g>`,
		"fallback": "uix-sharp:handle-time",
	});
}

export default Component;
