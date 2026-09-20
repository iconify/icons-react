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
		"content": `<style>.emo-jf0pj {
  d: path("M6 9a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.oifr9zbpt {
  d: path("M4 20h16");
}

.teggaxbsd {
  d: path("M8 16v4");
}

.zddikdsez {
  d: path("M8 16c-3 0 -5 -3 -5 -6s2 -5 5 -5 5 2 5 5l4 -4v8c-2 -1 -3 -2 -4 -3 -1 3 -3 5 -5 5");
}
</style><g class="nrj6p8qat"><path class="zddikdsez"/><path class="emo-jf0pj"/><path class="teggaxbsd"/><path class="oifr9zbpt"/></g>`,
		"fallback": "iconmind:birdwatching-outline-regular",
	});
}

export default Component;
