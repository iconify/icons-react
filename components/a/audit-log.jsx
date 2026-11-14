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

.saxb5le3t {
  d: path("M12.25 21.5H6.5a2 2 0 0 1-2-2v-15a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v7.75M8 7h6m-6 3.5h6M8 14h1.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="saxb5le3t"/><path class="p9k80vbmd"/></g>`,
		"fallback": "uix-sharp:audit-log",
	});
}

export default Component;
