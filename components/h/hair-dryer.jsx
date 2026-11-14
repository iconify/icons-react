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
		"content": `<style>.oglwy44sb {
  d: path("m12 12l.75 7a2 2 0 0 0 2 2h.5a2 2 0 0 0 2-2l.75-7m-5-4a2 2 0 1 0 4 0a2 2 0 1 0-4 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.wzcsgdaus {
  d: path("M11 5L3.5 6.5v3L11 11a5 5 0 1 0 0-6Z");
}
</style><g class="ulnmmdpxh"><path class="wzcsgdaus"/><path class="oglwy44sb"/></g>`,
		"fallback": "uix-sharp:hair-dryer",
	});
}

export default Component;
