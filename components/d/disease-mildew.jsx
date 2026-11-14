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
		"content": `<style>.dvdwz3t4q {
  d: path("M12 2.5c7.5 3.5 8.5 11 0 17c-8.5-6-7.5-13.5 0-17Zm0 4v15");
}

.hb42dqepe {
  d: path("M6.5 9.5q1.75-2 3 0q1.25-2 2.5 0q1.25-2 2.5 0q1.25-2 3 0m-8.25 3.25h.01m5.49 0h.01");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="dvdwz3t4q"/><path class="hb42dqepe"/></g>`,
		"fallback": "uix-sharp:disease-mildew",
	});
}

export default Component;
