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
		"content": `<style>.dos33lm6w {
  d: path("M9.75 10.25h5v4h-5Zm2.5 7.75h.01");
}

.pkdehphyr {
  d: path("M7 7.5h10.5v14H7Zm3.5-5H14v5h-3.5Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="pkdehphyr"/><path class="dos33lm6w"/></g>`,
		"fallback": "uix-sharp:breathalyser",
	});
}

export default Component;
