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
		"content": `<style>.a8ifq_cjh {
  d: path("M7 12.5v-2a3.5 3.5 0 0 1 7 0v1");
}

.h0d4zltep {
  d: path("M9.25 14v-3.5a1.25 1.25 0 0 1 2.5 0v3");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ydwudw6zd {
  d: path("M3.5 10.5a7 7 0 1 0 14 0a7 7 0 1 0-14 0Zm12 5l5 5");
}
</style><g class="ulnmmdpxh"><path class="ydwudw6zd"/><path class="a8ifq_cjh"/><path class="h0d4zltep"/></g>`,
		"fallback": "uix-sharp:forensics",
	});
}

export default Component;
