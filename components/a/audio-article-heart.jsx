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
		"content": `<style>.momub-3wq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 9.5v5M7.5 5v14M12 2.5v19M16.5 5v7M21 8v3.5M18 21l-2.5-2.5A1.75 1.75 0 0 1 18 16a1.75 1.75 0 0 1 2.5 2.5Z");
}
</style><path class="momub-3wq"/>`,
		"fallback": "uix:audio-article-heart",
	});
}

export default Component;
