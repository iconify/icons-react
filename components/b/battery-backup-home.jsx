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
		"content": `<style>.g-fnpt1yh {
  d: path("M12.744 20.5H3.5v-10L12 3.25l8.5 7.25v.656");
}

.hx9cn3b-v {
  d: path("M16.5 15h.5v-1h2v1h.5a1 1 0 0 1 1 1v4.5a1 1 0 0 1-1 1h-3a1 1 0 0 1-1-1V16a1 1 0 0 1 1-1Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="g-fnpt1yh"/><path class="hx9cn3b-v"/></g>`,
		"fallback": "uix-sharp:battery-backup-home",
	});
}

export default Component;
