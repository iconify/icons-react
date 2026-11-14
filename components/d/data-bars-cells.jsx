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
		"content": `<style>.m4m9i8bnh {
  fill: currentColor;
  d: path("M7.5 5h9v1.5h-9Zm0 6.25h4v1.5h-4Zm0 6.25H14V19H7.5Z");
}

.orqm14bpo {
  d: path("M4.5 2.5h15v19h-15Zm0 6.25h15m-15 6.5h15");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="orqm14bpo"/><path class="m4m9i8bnh"/></g>`,
		"fallback": "uix-sharp:data-bars-cells",
	});
}

export default Component;
