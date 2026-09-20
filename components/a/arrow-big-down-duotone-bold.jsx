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
		"content": `<style>.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.tykcjtbvl {
  d: path("m12 21 -9 -9h5V3h8v9h5Z");
}

.usr8x8mtt {
  fill: currentColor;
  d: path("m12 21 -9 -9h5V3h8v9h5Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}
</style><g class="s0phu2bbs"><path class="usr8x8mtt"/><path class="tykcjtbvl"/></g>`,
		"fallback": "iconmind:arrow-big-down-duotone-bold",
	});
}

export default Component;
