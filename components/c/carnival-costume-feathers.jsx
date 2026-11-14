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
		"content": `<style>.a68cwccto {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4 17h16v3.5H4Zm8 0V3M9 17Q8.5 9 6.5 4M15 17q.5-8 2.5-13M6 17q-1-5-3.5-8.5M18 17q1-5 3.5-8.5");
}
</style><path class="a68cwccto"/>`,
		"fallback": "uix-sharp:carnival-costume-feathers",
	});
}

export default Component;
