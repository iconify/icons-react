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
		"content": `<style>.fi5a7guyo {
  d: path("M8 11.5a4 4 0 1 0 8 0a4 4 0 1 0-8 0Z");
}

.t4bkivbzy {
  d: path("M5 2.5h14v19H5Zm7 3v2");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="t4bkivbzy"/><path class="fi5a7guyo"/></g>`,
		"fallback": "uix-sharp:door-knocker",
	});
}

export default Component;
