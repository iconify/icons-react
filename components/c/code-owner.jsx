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
		"content": `<style>.gt5vsf_ek {
  d: path("m8 7.5l-2.25 3l2.25 3m3-6l2.25 3l-2.25 3m5 2.25a2 2 0 1 0 4 0a2 2 0 1 0-4 0Zm-1.75 6c0-1.75 1.75-3 3.75-3s3.75 1.25 3.75 3");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.wre5irbxw {
  d: path("M12.2 19H3V2.5h13v8.9");
}
</style><g class="ulnmmdpxh"><path class="wre5irbxw"/><path class="gt5vsf_ek"/></g>`,
		"fallback": "uix-sharp:code-owner",
	});
}

export default Component;
