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
		"content": `<style>.tsz9sbcna {
  d: path("M11.4 20H2.5V2.5H18v9.9M6 7.5h8.5m-8.5 4h8.5m-8.5 4h4.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.zhv0d4brl {
  d: path("M14.25 15.25h7.5v6.5h-7.5Zm3.75 0V18");
}
</style><g class="ulnmmdpxh"><path class="tsz9sbcna"/><path class="zhv0d4brl"/></g>`,
		"fallback": "uix-sharp:delivery-instructions",
	});
}

export default Component;
