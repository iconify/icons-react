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
		"content": `<style>.l1defvb-d {
  d: path("M12 18.5H3v-16h16v8.2");
}

.ntn8g2bow {
  d: path("M6.5 12a4.5 4.5 0 0 1 9 0Zm4.5 0l2.5-2.75M18 13.5c2.5 2 3.25 3.75 3.25 5.25a3.25 3.25 0 0 1-6.5 0c0-1.25.5-2.25 1.25-3c.25 1 .75 1.5 1.25 1.75c0-1.25.25-2.75.75-4Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="l1defvb-d"/><path class="ntn8g2bow"/></g>`,
		"fallback": "uix-sharp:heating-meter",
	});
}

export default Component;
