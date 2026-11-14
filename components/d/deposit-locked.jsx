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

.wwu-w3t1e {
  d: path("M4.5 10.5h-2v3h2m3.25-2.75h.01M10.5 8.5h3m1.5 9h6v4h-6Zm1.5 0v-1a1.5 1.5 0 0 1 3 0v1");
}

.z51iqpyap {
  d: path("M12.164 18H12c-.75 0-1.25 0-2-.25v1.75H7.5V17C5.25 16 4 14.25 4 12c0-3.5 3.5-6 8-6s8 2.5 8 6q0 .333-.036.652");
}
</style><g class="ulnmmdpxh"><path class="z51iqpyap"/><path class="wwu-w3t1e"/></g>`,
		"fallback": "uix-sharp:deposit-locked",
	});
}

export default Component;
