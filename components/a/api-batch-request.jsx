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
		"content": `<style>.g3cyggwvm {
  d: path("m8 2.25l2.5 2.5L8 7.25");
}

.iala1ccfk {
  d: path("M10.5 2.5h11V7h-11Zm0 7.25h11v4.5h-11Zm0 7.25h11v4.5h-11Zm-8-12.25h8");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="iala1ccfk"/><path class="g3cyggwvm"/></g>`,
		"fallback": "uix-sharp:api-batch-request",
	});
}

export default Component;
