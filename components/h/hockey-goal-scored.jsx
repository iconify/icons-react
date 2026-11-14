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
		"content": `<style>.hluir00hm {
  d: path("M6.5 20L8 10h8l1.5 10");
}

.kiham4qtx {
  d: path("M3.5 20V7a2 2 0 0 1 2-2h13a2 2 0 0 1 2 2v13");
}

.pl9tpdb7p {
  d: path("M9 18a3 1.5 0 1 0 6 0a3 1.5 0 1 0-6 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="kiham4qtx"/><path class="hluir00hm"/><path class="pl9tpdb7p"/></g>`,
		"fallback": "uix-sharp:hockey-goal-scored",
	});
}

export default Component;
