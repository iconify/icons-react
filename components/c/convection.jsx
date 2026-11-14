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
		"content": `<style>.gzn2zgbqm {
  d: path("M12 15c2 1.25 3.25 2 3.25 3.25a3.25 3.25 0 0 1-6.5 0c0-.75.5-1.5 1.25-2c.25.75.75 1.25 1.25 1.5c-.25-1 0-2 .75-2.75Zm0-2.75a5 5 0 1 1 5-5");
}

.to2y-gbrq {
  d: path("M14.75 5L17 7.25L19.25 5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="gzn2zgbqm"/><path class="to2y-gbrq"/></g>`,
		"fallback": "uix-sharp:convection",
	});
}

export default Component;
