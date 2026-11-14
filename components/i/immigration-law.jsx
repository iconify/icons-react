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
		"content": `<style>.eoz3zibrm {
  d: path("M4.5 2.5h15v19h-15Z");
}

.kxxkqr3bf {
  d: path("M7.5 10.5a4.5 4.5 0 1 0 9 0a4.5 4.5 0 1 0-9 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.vhfzk055b {
  d: path("M10 10.5a2 4.5 0 1 0 4 0a2 4.5 0 1 0-4 0ZM9 18h6");
}
</style><g class="ulnmmdpxh"><path class="eoz3zibrm"/><path class="kxxkqr3bf"/><path class="vhfzk055b"/></g>`,
		"fallback": "uix-sharp:immigration-law",
	});
}

export default Component;
