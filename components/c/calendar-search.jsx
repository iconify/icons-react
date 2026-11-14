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
		"content": `<style>.p9k80vbmd {
  d: path("M15 17.5a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0Zm4.25 1.75L21 21");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.w7vkf81-a {
  d: path("M13.1 20.5H3.5V5h17v8.1M8 3v4m8-4v4M3.5 10h17M8 3v4m8-4v4M3.5 10h17");
}
</style><g class="ulnmmdpxh"><path class="w7vkf81-a"/><path class="p9k80vbmd"/></g>`,
		"fallback": "uix-sharp:calendar-search",
	});
}

export default Component;
