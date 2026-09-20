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
		"content": `<style>.bdb2pqp3q {
  d: path("M3 3h18l-7 7v6h-4v-6Z");
}

.bytnyw6tw {
  d: path("M19.5 16v2.5");
}

.d05ifsb6w {
  d: path("M17.5 12v2.5");
}

.k4r3pw-5j {
  fill: currentColor;
  d: path("M3 3h18l-7 7v6h-4v-6Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}
</style><g class="s0phu2bbs"><path class="k4r3pw-5j"/><path class="bdb2pqp3q"/><path class="d05ifsb6w"/><path class="bytnyw6tw"/></g>`,
		"fallback": "iconmind:funnel-leak-duotone-bold",
	});
}

export default Component;
