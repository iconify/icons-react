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
		"content": `<style>.ej1ycv3hl {
  fill: currentColor;
  d: path("M8 10a2 2 0 0 1 4 0 2 2 0 0 1 4 0l-4 4Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.slki1jkee {
  d: path("M8 10a2 2 0 0 1 4 0 2 2 0 0 1 4 0l-4 4Z");
}

.wv6md6qod {
  d: path("M15 3h3v18l-6 -6 -6 6V3h3");
}

.xdwo9hb6a {
  fill: currentColor;
  d: path("M15 3h3v18l-6 -6 -6 6V3h3");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}
</style><g class="hntgybcog"><path class="xdwo9hb6a"/><path class="ej1ycv3hl"/><path class="wv6md6qod"/><path class="slki1jkee"/></g>`,
		"fallback": "iconmind:favorite-bookmark-duotone-thin",
	});
}

export default Component;
