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
		"content": `<style>.fl1d8figg {
  d: path("M2.5 12a9.5 3.5 0 1 0 19 0a9.5 3.5 0 1 0-19 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.vo016xc9w {
  fill: currentColor;
  d: path("M8 12a4 4 0 1 0 8 0a4 4 0 1 0-8 0Z");
}
</style><g class="ulnmmdpxh"><path class="fl1d8figg"/><path class="vo016xc9w"/></g>`,
		"fallback": "uix-sharp:black-hole",
	});
}

export default Component;
