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
		"content": `<style>.teiptgd7o {
  d: path("M3.5 4H12v17H3.5Zm2.75 4.5h3m-3 4h3");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.v2a0c0f8g {
  d: path("M6.25 21v-4h3v4m7.25-10.75H20c2 2 2 6.25-.25 8.25l.5 2.5h-4l.5-2.5c-2.25-2-2.25-6.25-.25-8.25Zm-.25-2.75h4");
}
</style><g class="ulnmmdpxh"><path class="teiptgd7o"/><path class="v2a0c0f8g"/></g>`,
		"fallback": "uix-sharp:funeral-home",
	});
}

export default Component;
