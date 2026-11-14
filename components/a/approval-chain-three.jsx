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
		"content": `<style>.pie5a-bng {
  d: path("M15.75 12.25L17 13.5l2.25-2.25");
}

.tb6aa1bbf {
  d: path("M2.5 12a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0ZM8 12a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0Zm5.5 0a4 4 0 1 0 8 0a4 4 0 1 0-8 0Zm-8 0H8m3 0h2.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="tb6aa1bbf"/><path class="pie5a-bng"/></g>`,
		"fallback": "uix-sharp:approval-chain-three",
	});
}

export default Component;
