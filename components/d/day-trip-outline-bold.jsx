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
		"content": `<style>.bod4n0b3z {
  d: path("M2 18h20");
}

.eqwjlk9zl {
  d: path("m4 5 3 3");
}

.gd-e99l8k {
  d: path("m20 5 -3 3");
}

.isuawcbcl {
  d: path("M7.5 11a4.5 4.5 0 1 0 9 0 4.5 4.5 0 1 0 -9 0");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.zkgvk4bog {
  d: path("M12 2v3");
}
</style><g class="s0phu2bbs"><path class="isuawcbcl"/><path class="zkgvk4bog"/><path class="eqwjlk9zl"/><path class="gd-e99l8k"/><path class="bod4n0b3z"/></g>`,
		"fallback": "iconmind:day-trip-outline-bold",
	});
}

export default Component;
