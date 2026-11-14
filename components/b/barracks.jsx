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
		"content": `<style>.mcp7jfb-j {
  d: path("M10 20.5v-5h4v5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.vdcuzdgza {
  d: path("M2.5 12L12 7.5l9.5 4.5v8.5h-19ZM12 7.5v-5m0 0h4.5v3H12");
}
</style><g class="ulnmmdpxh"><path class="vdcuzdgza"/><path class="mcp7jfb-j"/></g>`,
		"fallback": "uix-sharp:barracks",
	});
}

export default Component;
