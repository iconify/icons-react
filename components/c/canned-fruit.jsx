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
		"content": `<style>.cx6dow2ci {
  d: path("M12 11q-1.5 2.5-.5 5m.5-5q1.25-1.75 3-1q-1.25 1.75-3 1Z");
}

.jf4uqjblp {
  d: path("M5 5v14a7 2 0 0 0 14 0V5");
}

.r-n-w1cgt {
  d: path("M8.5 14.5a3.5 3.5 0 1 0 7 0a3.5 3.5 0 1 0-7 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.x7u63pbeu {
  d: path("M5 5a7 2 0 1 0 14 0A7 2 0 1 0 5 5Z");
}
</style><g class="ulnmmdpxh"><path class="x7u63pbeu"/><path class="jf4uqjblp"/><path class="r-n-w1cgt"/><path class="cx6dow2ci"/></g>`,
		"fallback": "uix-sharp:canned-fruit",
	});
}

export default Component;
