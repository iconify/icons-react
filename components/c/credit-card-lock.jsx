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
		"content": `<style>.d-h9gcbnj {
  d: path("M15 17h6v4h-6Zm1.25 0v-1a1.75 1.75 0 0 1 3.5 0v1");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.yeihqgtcc {
  d: path("M12.2 19H2.5V5h19v8.1m-19-3.6h19m-19 0h19M6 15h3");
}
</style><g class="ulnmmdpxh"><path class="yeihqgtcc"/><path class="d-h9gcbnj"/></g>`,
		"fallback": "uix-sharp:credit-card-lock",
	});
}

export default Component;
