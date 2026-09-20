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
		"content": `<style>.fo31dvbxr {
  d: path("M3 14h7l3 3 -3 3H3Z");
}

.k6nj2fbya {
  d: path("M3 5h18");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.wmg5scbww {
  d: path("M17 14v6");
}

.x50q_4bdr {
  d: path("M3 10h18");
}
</style><g class="nrj6p8qat"><path class="k6nj2fbya"/><path class="x50q_4bdr"/><path class="fo31dvbxr"/><path class="wmg5scbww"/></g>`,
		"fallback": "iconmind:annotation-ui-outline-regular",
	});
}

export default Component;
