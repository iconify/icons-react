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
		"content": `<style>.jh23to8jf {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 20.5v-6.25q0-.75.75-.75H14q.75 0 .81-.75l.38-4.5q.06-.75.81-.75h1.25q.75 0 .81.75l.38 4.5q.06.75.81.75h1.25q.75 0 .75.75v6.25q0 .75-.75.75h-17q-.75 0-.75-.75M6 17.25h2m3 0h2m3 0h2m-3.5-12a1.75 1.75 0 0 1 3-1.25a1.75 1.75 0 0 1 3.25.75");
}
</style><path class="jh23to8jf"/>`,
		"fallback": "iconoven:factory-chimney",
	});
}

export default Component;
