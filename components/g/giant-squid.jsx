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
		"content": `<style>.eesde3bbf {
  d: path("m14.5 5l4 3.25l-2.25 1M9.5 5l-4 3.25l2.25 1m2.5 1h.01m3.49 0h.01M9.5 13.5C9 17 5 16 4.5 19.5c-.25 2 2 2 2 .5m8-6.5c.5 3.5 4.5 2.5 5 6c.25 2-2 2-2 .5M12 13.5v5");
}

.uion04byw {
  d: path("M12 2.5c4 3 4.5 6.5 4 11H8c-.5-4.5 0-8 4-11Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="uion04byw"/><path class="eesde3bbf"/></g>`,
		"fallback": "uix-sharp:giant-squid",
	});
}

export default Component;
