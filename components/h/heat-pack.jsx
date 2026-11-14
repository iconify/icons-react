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
		"content": `<style>.f3068hb6c {
  d: path("M8.5 18.5c-1-1.5 1-3 0-4.5s1-3 0-4.25M12 18.5c-1-1.5 1-3 0-4.5s1-3 0-4.25m3.5 8.75c-1-1.5 1-3 0-4.5s1-3 0-4.25");
}

.tbra3sb5b {
  d: path("M4.5 3h15a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1h-15a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1Zm-1 4h17");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="tbra3sb5b"/><path class="f3068hb6c"/></g>`,
		"fallback": "uix-sharp:heat-pack",
	});
}

export default Component;
