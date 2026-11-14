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
		"content": `<style>.dc0e5le1x {
  d: path("M12 7.75a4.25 4.25 0 0 0 0 8.5Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.yic-v9-nj {
  d: path("M2.5 12c3-9.5 16-9.5 19 0c-3 9.5-16 9.5-19 0Z");
}
</style><g class="ulnmmdpxh"><path class="yic-v9-nj"/><path class="dc0e5le1x"/></g>`,
		"fallback": "uix-sharp:colour-blindness-sim",
	});
}

export default Component;
