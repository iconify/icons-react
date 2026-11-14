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
		"content": `<style>.gaqwr-imk {
  d: path("M10 6.5L7.5 9l2.5 2.5m4-5L16.5 9L14 11.5m.5 10.5l3.25-8.5m1 8.5L22 13.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.w2oti_bee {
  d: path("M11.7 21.5H4.5v-19h15v8.7");
}
</style><g class="ulnmmdpxh"><path class="w2oti_bee"/><path class="gaqwr-imk"/></g>`,
		"fallback": "uix-sharp:comment-toggle",
	});
}

export default Component;
