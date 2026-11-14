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
		"content": `<style>.h4f8xqbrj {
  d: path("M5 3h14v18H5Z");
}

.p1cke3bft {
  d: path("M8.25 16a1.25 1.25 0 1 0 2.5 0a1.25 1.25 0 1 0-2.5 0Zm2.25-1c5.5-1.5-2.5-5 3-6.75");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.z3xrlcghz {
  d: path("M13.25 7.5a1.25 1.25 0 1 0 2.5 0a1.25 1.25 0 1 0-2.5 0Z");
}
</style><g class="ulnmmdpxh"><path class="h4f8xqbrj"/><path class="p1cke3bft"/><path class="z3xrlcghz"/></g>`,
		"fallback": "uix-sharp:electronic-flight-bag",
	});
}

export default Component;
