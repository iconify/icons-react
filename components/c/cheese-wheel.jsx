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
		"content": `<style>.e_-_jdb5z {
  d: path("M12 9h8.5a8.5 3.5 0 1 0-5.5 3.25Z");
}

.qmdwc8miz {
  d: path("M3.5 9v6A8.5 3.5 0 0 0 15 18.25v-6");
}

.u80ssxhzl {
  d: path("M20.5 9v6H12V9m0 6l3 3.25");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="e_-_jdb5z"/><path class="qmdwc8miz"/><path class="u80ssxhzl"/></g>`,
		"fallback": "uix-sharp:cheese-wheel",
	});
}

export default Component;
