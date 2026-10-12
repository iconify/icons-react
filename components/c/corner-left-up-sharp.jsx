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
		"content": `<style>.i66ibbo0w {
  d: path("M19.75 19.75H9.25v-15");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.yrsxudblh {
  d: path("M13 8.5L9.25 4.75L5.5 8.5");
}
</style><g class="x2cwu0gfd"><path class="i66ibbo0w"/><path class="yrsxudblh"/></g>`,
		"fallback": "iconoven:corner-left-up-sharp",
	});
}

export default Component;
