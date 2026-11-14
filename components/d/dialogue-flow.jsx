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
		"content": `<style>.id1aw0lsj {
  d: path("M9.5 12.5h9V7.75");
}

.ip7n5cctz {
  d: path("M16.25 5.5a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0Z");
}

.mu7dsh2wi {
  d: path("M4.5 2.5h6a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2h-4l-2.5 2v-2a2 2 0 0 1-1.5-2v-3a2 2 0 0 1 2-2Zm10 12.75h5a2 2 0 0 1 2 2v4.25L19 20h-4.5a2 2 0 0 1-2-2v-.75a2 2 0 0 1 2-2Z");
}

.rhh_egbxt {
  d: path("M9.5 9.5v8h3");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="mu7dsh2wi"/><path class="rhh_egbxt"/><path class="id1aw0lsj"/><path class="ip7n5cctz"/></g>`,
		"fallback": "uix-sharp:dialogue-flow",
	});
}

export default Component;
