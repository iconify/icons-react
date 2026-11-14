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
		"content": `<style>.moqjqhbix {
  d: path("M5 3.5h14A2.5 2.5 0 0 1 21.5 6v8a2.5 2.5 0 0 1-2.5 2.5H9.5l-4 3.5v-3.5H5A2.5 2.5 0 0 1 2.5 14V6A2.5 2.5 0 0 1 5 3.5Z");
}

.o5fpdqhaz {
  d: path("m8 10.25l3 3l5-5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="moqjqhbix"/><path class="o5fpdqhaz"/></g>`,
		"fallback": "uix-sharp:conversation-close",
	});
}

export default Component;
