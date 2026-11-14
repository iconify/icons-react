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
		"content": `<style>.dqgg4cz2h {
  d: path("M9.5 11.5q1.25-1.25 2.5 0t2.5 0");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.xl8wcug9u {
  d: path("M2.5 20L9 6h6l6.5 14Z");
}
</style><g class="ulnmmdpxh"><path class="xl8wcug9u"/><path class="dqgg4cz2h"/></g>`,
		"fallback": "uix-sharp:crater-lake",
	});
}

export default Component;
