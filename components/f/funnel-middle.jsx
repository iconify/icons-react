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
		"content": `<style>.bsjrnvjup {
  fill: currentColor;
  d: path("M7.5 10.25h9L13.75 14h-3.5Z");
}

.hnebgabqn {
  d: path("M10.25 16.75h3.5v4.5h-3.5Z");
}

.tffradcsh {
  d: path("M2.5 3.5h19l-3 4h-13Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="tffradcsh"/><path class="bsjrnvjup"/><path class="hnebgabqn"/></g>`,
		"fallback": "uix-sharp:funnel-middle",
	});
}

export default Component;
