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
		"content": `<style>.ir0h55dwb {
  d: path("M7.5 3.6V2.5h12v19h-12V11.4m4.5 7.1h2.6");
}

.nou_9cf9e {
  d: path("m3 3l12 12m0-4.5V15h-4.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="ir0h55dwb"/><path class="nou_9cf9e"/></g>`,
		"fallback": "uix-sharp:deep-link",
	});
}

export default Component;
