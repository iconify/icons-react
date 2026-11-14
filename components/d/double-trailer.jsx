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
		"content": `<style>.jajb4ih8h {
  d: path("M3.5 16.75a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0Zm8.25 0a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0Zm5.5 0a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.vyojieb8q {
  d: path("M2.5 5.5H8V15H2.5ZM8 13h2.75m0-7.5h5.5V15h-5.5Zm5.5 2.5H19l2.5 3v4h-5.25");
}
</style><g class="ulnmmdpxh"><path class="vyojieb8q"/><path class="jajb4ih8h"/></g>`,
		"fallback": "uix-sharp:double-trailer",
	});
}

export default Component;
