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
		"content": `<style>.xnjp-1bsn {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M13.65 2.644a9.5 9.5 0 0 1 5.627 3.25m1.65 2.857a9.5 9.5 0 0 1 0 6.498m-1.65 2.857a9.5 9.5 0 0 1-5.627 3.25m-3.3 0a9.5 9.5 0 0 1-5.627-3.25m-1.65-2.857a9.5 9.5 0 0 1 0-6.498m1.65-2.857a9.5 9.5 0 0 1 5.627-3.25m5.275 9.856l-.062.022a1.246 1.246 0 0 0-.688 1.728a.466.466 0 0 1-.625.625a1.246 1.246 0 0 0-1.728.688l-.022.062a.532.532 0 0 1-1 0l-.022-.062a1.246 1.246 0 0 0-1.728-.688a.466.466 0 0 1-.625-.625a1.246 1.246 0 0 0-.688-1.728l-.062-.022a.532.532 0 0 1 0-1l.062-.022a1.246 1.246 0 0 0 .688-1.728a.466.466 0 0 1 .625-.625a1.246 1.246 0 0 0 1.728-.688l.022-.062a.532.532 0 0 1 1 0l.022.062a1.246 1.246 0 0 0 1.728.688a.466.466 0 0 1 .625.625a1.246 1.246 0 0 0 .688 1.728l.062.022a.532.532 0 0 1 0 1");
}
</style><path class="xnjp-1bsn"/>`,
		"fallback": "uix:blast-zone",
	});
}

export default Component;
