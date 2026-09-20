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
		"content": `<style>.h3z-uye4u {
  d: path("m8 8 4 -4 4 4");
}

.ilxguy6uu {
  d: path("M12 4v10");
}

.k7llgzrde {
  d: path("M10 18.5a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.plo1k7bci {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("m8 8 4 -4 4 4");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.qye9c0bkv {
  fill: currentColor;
  d: path("M10 18.5a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
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

.x47b2wbqm {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M12 4v10");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="s0phu2bbs"><path class="qye9c0bkv"/><path class="x47b2wbqm"/><path class="plo1k7bci"/><path class="k7llgzrde"/><path class="ilxguy6uu"/><path class="h3z-uye4u"/></g>`,
		"fallback": "iconmind:arrow-up-from-dot-duotone-bold",
	});
}

export default Component;
