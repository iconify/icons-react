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
		"content": `<style>.cetgrthhr {
  d: path("M13 2.5h8.5v19H13ZM13 8h8.5");
}

.h5ozmlbta {
  d: path("M15.5 14.5a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0Zm-13-5H10v6H2.5Zm0 2.25H10");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="cetgrthhr"/><path class="h5ozmlbta"/></g>`,
		"fallback": "uix-sharp:fare-card-register",
	});
}

export default Component;
