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
		"content": `<style>.qakfjpo1e {
  d: path("M8 4h8l4 5.5L12 21L4 9.5ZM4 9.5h16");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.wphvxrb5q {
  d: path("M12 21L9 9.5L11 4");
}
</style><g class="ulnmmdpxh"><path class="qakfjpo1e"/><path class="wphvxrb5q"/></g>`,
		"fallback": "uix-sharp:category-jewelry",
	});
}

export default Component;
