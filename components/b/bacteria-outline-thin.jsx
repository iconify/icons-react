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
		"content": `<style>.c1gddow5o {
  d: path("m8 17 -4 4");
}

.ed5pr-bww {
  d: path("m5 14 6 -6a4 4 0 0 1 6 6l-6 6a4 4 0 0 1 -6 -6");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.wktcpfcga {
  d: path("m17 11 4 -4");
}
</style><g class="hntgybcog"><path class="ed5pr-bww"/><path class="wktcpfcga"/><path class="c1gddow5o"/></g>`,
		"fallback": "iconmind:bacteria-outline-thin",
	});
}

export default Component;
