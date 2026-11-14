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
		"content": `<style>.cllxm0byq {
  d: path("M10 10.5V7a4 4 0 0 1 8 0v3.5m-6 4v3");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.zrlhvtb3a {
  d: path("M3.5 10.5h17v11h-17Zm2.5 0V7a4 4 0 0 1 8 0v3.5");
}
</style><g class="ulnmmdpxh"><path class="zrlhvtb3a"/><path class="cllxm0byq"/></g>`,
		"fallback": "uix-sharp:deadlock",
	});
}

export default Component;
