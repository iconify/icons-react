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
		"content": `<style>.ozz3b7beu {
  d: path("M3 20.5V5l2.5-2l2 2L10 2.5l2.5 2l2.5-1L17 7l2-.5l2 3v11");
}

.rf19nsq3l {
  d: path("M9.5 17v-4.5A5 5 0 0 1 12 8a5 5 0 0 1 2.5 4.5V17Zm-7 3.5h19");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="ozz3b7beu"/><path class="rf19nsq3l"/></g>`,
		"fallback": "uix-sharp:abbey-ruins",
	});
}

export default Component;
