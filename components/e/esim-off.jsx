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
		"content": `<style>.l672kbbzs {
  d: path("M6.4 2.5h8.1L19 7v8.036M17.564 21.5H5V8.964");
}

.ouve24z0u {
  d: path("M12.9 9h2.6v2.6M13.1 17H8.5v-4.6m-5-8.9l17 17");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="l672kbbzs"/><path class="ouve24z0u"/></g>`,
		"fallback": "uix-sharp:esim-off",
	});
}

export default Component;
