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
		"content": `<style>.jg3263b5a {
  d: path("M6.5 15.5a2 2 0 1 0 4 0a2 2 0 1 0-4 0Zm7 0a2 2 0 1 0 4 0a2 2 0 1 0-4 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.xecumdbok {
  d: path("M6.5 2.5h11V7h-11Zm-3 7.25h17V21.5h-17Z");
}
</style><g class="ulnmmdpxh"><path class="xecumdbok"/><path class="jg3263b5a"/></g>`,
		"fallback": "uix-sharp:amp-stack",
	});
}

export default Component;
