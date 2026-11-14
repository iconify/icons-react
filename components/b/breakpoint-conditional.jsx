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

.wp-iwphvr {
  d: path("M15.5 16a2.5 2.5 0 1 1 3.5 2.25c-.75.25-1 .75-1 1.5M18 22h.01");
}

.wqaej5m_a {
  d: path("M2.5 8.5h17");
}

.zu3gggu0t {
  fill: currentColor;
  d: path("M5 8.5a4.5 4.5 0 1 0 9 0a4.5 4.5 0 1 0-9 0Z");
}
</style><g class="ulnmmdpxh"><path class="wqaej5m_a"/><path class="zu3gggu0t"/><path class="wp-iwphvr"/></g>`,
		"fallback": "uix-sharp:breakpoint-conditional",
	});
}

export default Component;
