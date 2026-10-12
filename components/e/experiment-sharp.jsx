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
		"content": `<style>.lo22fabmk {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7.75 4.25h3.5v5.1l4.35 8.1l1.865 3.328l-3.815.022h-8.3l-3.815-.022L3.4 17.45l4.35-8.1ZM6.25 15h6.5M17.5 2.75q.45 3.3 3.75 3.75q-3.3.45-3.75 3.75q-.45-3.3-3.75-3.75q3.3-.45 3.75-3.75Z");
}
</style><path class="lo22fabmk"/>`,
		"fallback": "iconoven:experiment-sharp",
	});
}

export default Component;
