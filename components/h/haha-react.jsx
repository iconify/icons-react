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
		"content": `<style>.gwydwtbga {
  d: path("M8.3 19.43a8.75 8.75 0 1 0-4.23-4.23l-.67 4.35c-.1.6.45 1.1 1 .95Z");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.mrvzxkgvb {
  d: path("M8 9.75L9.25 8.5l1.25 1.25m3 0l1.25-1.25L16 9.75m-8 2.5h8a4 4 0 0 1-8 0");
}
</style><g class="hntgybcog"><path class="gwydwtbga"/><path class="mrvzxkgvb"/></g>`,
		"fallback": "iconoven:haha-react",
	});
}

export default Component;
