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
		"content": `<style>.tvtw0tbeg {
  d: path("M2.5 20c0-2.75 2.9-4.5 6.5-4.5s6.5 1.75 6.5 4.5c0 .6-.4 1-1 1h-11c-.6 0-1-.4-1-1Zm4-11a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.wi55sla9y {
  d: path("M4 11.5V9a5 5 0 0 1 10 0v1.5m-10 1c0 1.25.75 2 2.25 2m11.872-4.911l.052-1.038h1.152l.052 1.038l.929.537l.925-.474l.576.997l-.873.564v1.074l.873.564l-.576.997l-.925-.474l-.929.537l-.052 1.038h-1.152l-.052-1.038l-.929-.537l-.925.474l-.576-.997l.873-.564v-1.074l-.873-.564l.576-.997l.925.474Z");
}
</style><g class="ulnmmdpxh"><path class="tvtw0tbeg"/><path class="wi55sla9y"/></g>`,
		"fallback": "uix-sharp:agent-settings",
	});
}

export default Component;
