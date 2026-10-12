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
		"content": `<style>.uzsd6rblr {
  d: path("M7.5 5h8.25v6H7.5z");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.xoo9bbuyg {
  d: path("M7.5 6.75H2.75v11.5h5.5V11m7.5-4.75h2.75v3.5h-2.75zM18.5 8h2.75m-8.75 3h3v8h-3zm3 2.75h5.75");
}
</style><g class="x2cwu0gfd"><path class="uzsd6rblr"/><path class="xoo9bbuyg"/></g>`,
		"fallback": "iconoven:drill-site-sharp",
	});
}

export default Component;
