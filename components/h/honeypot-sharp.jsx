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
		"content": `<style>.duwd6rbor {
  d: path("M8.75 7.5v4.25h2.5V8.5h2v4.25h2.5V7.5Z");
}

.u4g6vtb4q {
  d: path("M6 7.5h12l.5 1.5c1.5 4.5 1.5 8.25-1 11.5l-.615.769l-.985-.019H8.1l-.985.019L6.5 20.5C4 17.25 4 13.5 5.5 9ZM4.75 4h14.5v3.5H4.75z");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="u4g6vtb4q"/><path class="duwd6rbor"/></g>`,
		"fallback": "iconoven:honeypot-sharp",
	});
}

export default Component;
