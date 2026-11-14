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
		"content": `<style>.dutgie71m {
  d: path("M12 2.5c3.5 2.25 4.5 6 4 12.5H8c-.5-6.5.5-10.25 4-12.5Z");
}

.t6-u3v5du {
  d: path("m8.25 10.5l-2.75 3v3L8 15m7.75-4.5l2.75 3v3L16 15m-5.25 0L12 18.25L13.25 15M4.5 21h15");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="dutgie71m"/><path class="t6-u3v5du"/></g>`,
		"fallback": "uix-sharp:getting-started",
	});
}

export default Component;
