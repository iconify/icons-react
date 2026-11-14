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
		"content": `<style>.a8uekl0vn {
  d: path("M2.5 15h19v3h-19ZM5 18h4l-4 3.5Zm14 0h-4l4 3.5ZM8 2.5h8V6a4 4 0 0 1-8 0Z");
}

.j4jybjbga {
  d: path("M8 4H6.25c-.75 0-1 .75-.75 1.5c.4 1.25 1.25 2.25 2.75 2.75M16 4h1.75c.75 0 1 .75.75 1.5c-.4 1.25-1.25 2.25-2.75 2.75M12 10v2.5m-3 0h6V15H9Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="a8uekl0vn"/><path class="j4jybjbga"/></g>`,
		"fallback": "uix-sharp:best-seller-shelf",
	});
}

export default Component;
