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
		"content": `<style>.bxh21pbjs {
  d: path("m10.25 8.75l-4.75.5l-1.75 3.25l4.75-1m6.75 2.25l-.5 4.75l-3.25 1.75l1-4.75m1-6.5a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0Zm-5 6.5l-4 4");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.xchanrlhl {
  d: path("M20.5 3.5c-5.5 0-10.5 3-12 8l4 4c5-1.5 8-6.5 8-12Z");
}
</style><g class="ulnmmdpxh"><path class="xchanrlhl"/><path class="bxh21pbjs"/></g>`,
		"fallback": "uix-sharp:initiative",
	});
}

export default Component;
