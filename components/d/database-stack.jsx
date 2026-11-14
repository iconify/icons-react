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
		"content": `<style>.ca6f1gs_r {
  d: path("M8 9.25c0 1.15 2.7 2.25 6.25 2.25s6.25-1.1 6.25-2.25M8 14.5c0 1.1 2.7 2.25 6.25 2.25s6.25-1.15 6.25-2.25");
}

.f0ye-eo3i {
  d: path("M4.75 16c-.85-.4-1.25-.9-1.25-1.5V5c0-1.4 2.9-2.5 6.5-2.5c2.6 0 4.8.6 5.75 1.5");
}

.obslszbmk {
  d: path("M8 9.25C8 8.1 10.7 7 14.25 7s6.25 1.1 6.25 2.25v10c0 1.15-2.7 2.25-6.25 2.25S8 20.4 8 19.25Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="obslszbmk"/><path class="ca6f1gs_r"/><path class="f0ye-eo3i"/></g>`,
		"fallback": "uix-sharp:database-stack",
	});
}

export default Component;
