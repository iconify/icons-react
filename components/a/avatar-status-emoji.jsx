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
		"content": `<style>.d6l4b52rh {
  d: path("M19.732 19.25a2 2 0 0 1-3.464 0");
}

.jwoje4bvc {
  d: path("M11.972 20.5H4c-.6 0-1-.4-1-1c0-3.25 3.25-5.5 7.5-5.5c.753 0 1.475.071 2.153.205M6.5 7a4 4 0 1 0 8 0a4 4 0 1 0-8 0Zm7.75 11a3.75 3.75 0 1 0 7.5 0a3.75 3.75 0 1 0-7.5 0Zm2.5-1.25h.01m2.49 0h.01");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="jwoje4bvc"/><path class="d6l4b52rh"/></g>`,
		"fallback": "uix-sharp:avatar-status-emoji",
	});
}

export default Component;
