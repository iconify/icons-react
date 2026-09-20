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
		"content": `<style>.iu2miqbwo {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M4 14V4h10");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.olzfpgbos {
  d: path("M4 14V4h10");
}

.pilb5jbne {
  d: path("M20 20 4 4");
}

.pu2676bxf {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M20 20 4 4");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}
</style><g class="s0phu2bbs"><path class="pu2676bxf"/><path class="iu2miqbwo"/><path class="pilb5jbne"/><path class="olzfpgbos"/></g>`,
		"fallback": "iconmind:arrow-up-left-duotone-bold",
	});
}

export default Component;
