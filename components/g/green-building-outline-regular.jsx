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
		"content": `<style>.k0bfs0wpz {
  d: path("M5 21V10h14v11Z");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.pbzp0rm9r {
  d: path("M8.5 9.5c0 -4.2 2.8 -7 7 -7 0 4.2 -2.8 7 -7 7");
}

.xmopbdc-t {
  d: path("M5 15h14");
}
</style><g class="nrj6p8qat"><path class="k0bfs0wpz"/><path class="xmopbdc-t"/><path class="pbzp0rm9r"/></g>`,
		"fallback": "iconmind:green-building-outline-regular",
	});
}

export default Component;
