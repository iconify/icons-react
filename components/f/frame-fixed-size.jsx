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
		"content": `<style>.dm_wopyrf {
  d: path("M16.5 17.5v-1a1.5 1.5 0 0 1 3 0v1");
}

.njg3y9vsy {
  d: path("M12.2 19.25H3v-11h17v4.4M3 4h16M5.5 2.5L3 4l2.5 1.5m11-3L19 4l-2.5 1.5m-1.5 12h6v4h-6Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="njg3y9vsy"/><path class="dm_wopyrf"/></g>`,
		"fallback": "uix-sharp:frame-fixed-size",
	});
}

export default Component;
