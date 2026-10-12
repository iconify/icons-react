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
		"content": `<style>.fr9wc8ere {
  width: 18.5px;
  height: 16.5px;
  x: 2.75px;
  y: 3.75px;
  rx: 2.5px;
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.p_flhjbml {
  cx: 8.5px;
  cy: 9px;
  r: 1.75px;
}

.wpqn4qb4h {
  d: path("m2.75 16.25l4.1-4.1a1.6 1.6 0 0 1 2.25 0l5.15 5.15M13 16.05l1.85-1.85a1.6 1.6 0 0 1 2.25 0l3.9 3.9");
}
</style><g class="hntgybcog"><rect class="fr9wc8ere"/><circle class="p_flhjbml"/><path class="wpqn4qb4h"/></g>`,
		"fallback": "iconoven:image-video",
	});
}

export default Component;
