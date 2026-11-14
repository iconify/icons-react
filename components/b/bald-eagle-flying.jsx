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
		"content": `<style>.bb5ykgvdr {
  d: path("M10.25 6.75a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0Z");
}

.c_ssq92rq {
  d: path("M12 8.5c-2 0-5-1.5-9.5-2l2.5 5l4.5 1L10 14l-1.5 5h7L14 14l.5-1.5l4.5-1l2.5-5c-4.5.5-7.5 2-9.5 2Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="c_ssq92rq"/><path class="bb5ykgvdr"/></g>`,
		"fallback": "uix-sharp:bald-eagle-flying",
	});
}

export default Component;
