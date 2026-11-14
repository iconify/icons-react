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
		"content": `<style>.fzu88m-nb {
  d: path("M9 8.25v-1.5a1.5 1.5 0 0 1 1.5-1.5h3a1.5 1.5 0 0 1 1.5 1.5v1.5");
}

.u0twtl96g {
  d: path("M4.5 19V5A2.5 2.5 0 0 1 7 2.5h12.5v19H7A2.5 2.5 0 0 1 4.5 19Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.uuf2qibax {
  d: path("M4.5 19A2.5 2.5 0 0 1 7 16.5h12.5m-12-2.75v-4a1.5 1.5 0 0 1 3 0v1.5h3v-1.5a1.5 1.5 0 0 1 3 0v4");
}
</style><g class="ulnmmdpxh"><path class="u0twtl96g"/><path class="uuf2qibax"/><path class="fzu88m-nb"/></g>`,
		"fallback": "uix-sharp:furniture-catalog",
	});
}

export default Component;
