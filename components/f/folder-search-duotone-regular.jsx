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
		"content": `<style>.bn_pu6j-z {
  d: path("M20 7v13H4V4h5l3 3h4");
}

.lp21zybfl {
  d: path("M8.5 13a3 3 0 1 0 6 0 3 3 0 1 0 -6 0");
}

.mqd_1c8mi {
  fill: currentColor;
  d: path("M8.5 13a3 3 0 1 0 6 0 3 3 0 1 0 -6 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.r0jamibkm {
  fill: currentColor;
  d: path("M20 7v13H4V4h5l3 3h4");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.vpqn33bbz {
  d: path("m13.5 15 2.5 2.5");
}
</style><g class="nrj6p8qat"><path class="r0jamibkm"/><path class="mqd_1c8mi"/><path class="bn_pu6j-z"/><path class="lp21zybfl"/><path class="vpqn33bbz"/></g>`,
		"fallback": "iconmind:folder-search-duotone-regular",
	});
}

export default Component;
