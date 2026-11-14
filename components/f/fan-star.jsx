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
		"content": `<style>.aepdhfb3w {
  d: path("M12 4a3.25 3.25 0 0 1 5.75 2.25A3.25 3.25 0 0 1 20 12a3.25 3.25 0 0 1-2.25 5.75A3.25 3.25 0 0 1 12 20a3.25 3.25 0 0 1-5.75-2.25A3.25 3.25 0 0 1 4 12a3.25 3.25 0 0 1 2.25-5.75A3.25 3.25 0 0 1 12 4Z");
}

.f161w0bnj {
  d: path("m12 7.25l1.25 3.25l3.5.25l-2.75 2l1 3.5l-3-2l-3 2l1-3.5l-2.75-2l3.5-.25Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="aepdhfb3w"/><path class="f161w0bnj"/></g>`,
		"fallback": "uix-sharp:fan-star",
	});
}

export default Component;
