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
		"content": `<style>.c8hmcy6ke {
  d: path("m3 6l3 8h7.5l3 4.5M5.75 10.75h4.75M7.5 14v5.5M12 14v5.5m-6.5 0H14m6 2v-18h-3");
}

.hn0465b8v {
  d: path("M15.25 5.5h3.5v5h-3.5Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="c8hmcy6ke"/><path class="hn0465b8v"/></g>`,
		"fallback": "uix-sharp:infusion-chair",
	});
}

export default Component;
