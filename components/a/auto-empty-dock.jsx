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
		"content": `<style>.ewz8zthqv {
  d: path("m9.5 10l2.5 2.5l2.5-2.5");
}

.pk7faz8cd {
  d: path("M6.5 16.5v-11A2.5 2.5 0 0 1 9 3h6a2.5 2.5 0 0 1 2.5 2.5v11M3 16.5h18V21H3ZM12 6v6.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="pk7faz8cd"/><path class="ewz8zthqv"/></g>`,
		"fallback": "uix-sharp:auto-empty-dock",
	});
}

export default Component;
