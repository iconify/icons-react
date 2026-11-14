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
		"content": `<style>.d9ltakbhb {
  d: path("M8.5 2.5h7l6 6v7l-6 6h-7l-6-6v-7Z");
}

.qz1eedcwb {
  d: path("M12 6.5a2.75 2.75 0 0 1 0 5.5a2.75 2.75 0 0 0 0 5.5m0-8.25h.01m-.01 5.5h.01");
}

.rq866kbao {
  d: path("M6.5 12a5.5 5.5 0 1 0 11 0a5.5 5.5 0 1 0-11 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="d9ltakbhb"/><path class="rq866kbao"/><path class="qz1eedcwb"/></g>`,
		"fallback": "uix-sharp:bagua-octagon",
	});
}

export default Component;
