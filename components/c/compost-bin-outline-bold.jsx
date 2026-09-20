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
		"content": `<style>.cfeplwbzd {
  d: path("M12 17c-3 0 -4 -2 -4 -4 3 0 4 2 4 4");
}

.rw4xuxb2g {
  d: path("M6 10v10h12V10Z");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.vn6-di86m {
  d: path("M4 7h16");
}
</style><g class="s0phu2bbs"><path class="rw4xuxb2g"/><path class="vn6-di86m"/><path class="cfeplwbzd"/></g>`,
		"fallback": "iconmind:compost-bin-outline-bold",
	});
}

export default Component;
