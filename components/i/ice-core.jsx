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
		"content": `<style>.mgbc3-bkm {
  d: path("M8 4.5a4 1.5 0 1 0 8 0a4 1.5 0 1 0-8 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ym9vz_bku {
  d: path("M8 4.5v15a4 1.5 0 0 0 8 0v-15m-8 6L16 9m-8 7l8-2");
}
</style><g class="ulnmmdpxh"><path class="mgbc3-bkm"/><path class="ym9vz_bku"/></g>`,
		"fallback": "uix-sharp:ice-core",
	});
}

export default Component;
