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
		"content": `<style>.ebqzi9bwo {
  d: path("M8.5 8.5h13v13h-13Z");
}

.gwlgtkb9v {
  d: path("M2.5 2.5h13v13h-13Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.webna2bbr {
  d: path("m13.5 21.5l4-4l4 4");
}
</style><g class="ulnmmdpxh"><path class="gwlgtkb9v"/><path class="ebqzi9bwo"/><path class="webna2bbr"/></g>`,
		"fallback": "uix-sharp:double-exposure",
	});
}

export default Component;
