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
		"content": `<style>.e49wvgb5i {
  d: path("M2.5 15v-4H11V4.5h4V15Z");
}

.qi53h3bcm {
  d: path("M2.5 11V7.5a1 1 0 0 1 1-1h.75V5h2.5v1.5h.75a1 1 0 0 1 1 1V11M15 7l4.75 4.5m-1.75 0h3.5l-1 6H18ZM3.5 17A2.25 2.25 0 1 0 8 17a2.25 2.25 0 1 0-4.5 0Zm7 0a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="e49wvgb5i"/><path class="qi53h3bcm"/></g>`,
		"fallback": "uix-sharp:battery-electric-loader",
	});
}

export default Component;
