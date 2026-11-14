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
		"content": `<style>.a6k62accz {
  d: path("M18 16.5V18l1.25 1");
}

.d0jfembef {
  d: path("M14.75 18a3.25 3.25 0 1 0 6.5 0a3.25 3.25 0 1 0-6.5 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.z94v1jgbs {
  d: path("M12 19H2.5V5h19v8.1m-19-3.6h19m-19 0h19M6 15h2.5");
}
</style><g class="ulnmmdpxh"><path class="z94v1jgbs"/><path class="d0jfembef"/><path class="a6k62accz"/></g>`,
		"fallback": "uix-sharp:credit-history",
	});
}

export default Component;
