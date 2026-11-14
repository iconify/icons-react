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
		"content": `<style>.o-av9cbeg {
  d: path("M5 4.5a2 2 0 0 1 2-2h7l5 5v12a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2Z");
}

.rx8_8ccsi {
  d: path("M14 2.5v5h5M8.75 16a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0Zm3.5 0v-6l3.25 1.25");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="o-av9cbeg"/><path class="rx8_8ccsi"/></g>`,
		"fallback": "uix-sharp:audio-file-mp3",
	});
}

export default Component;
