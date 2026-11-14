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
		"content": `<style>.q108i92cf {
  d: path("m2.5 10l2 2l2-2m2.75-1.75a3.25 1.25 0 1 0 6.5 0a3.25 1.25 0 1 0-6.5 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.whi-fg93u {
  d: path("M9.25 8.25v7.5a3.25 1.25 0 0 0 6.5 0v-7.5");
}

.wntovpb7d {
  d: path("M5.5 16a8 8 0 1 0-1-4");
}

.x4gomqbbj {
  d: path("M9.25 12.25a3.25 1.25 0 0 0 6.5 0");
}
</style><g class="ulnmmdpxh"><path class="wntovpb7d"/><path class="q108i92cf"/><path class="whi-fg93u"/><path class="x4gomqbbj"/></g>`,
		"fallback": "uix-sharp:backup-restore",
	});
}

export default Component;
