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
		"content": `<style>.a3ch5yb2h {
  d: path("M5 10h10");
}

.kj1tfs36l {
  d: path("M15 9c3 0 4 2 4 4s-1 4 -4 4");
}

.pmq4fab-l {
  d: path("M5 6h10v15H5Z");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}
</style><g class="s0phu2bbs"><path class="pmq4fab-l"/><path class="kj1tfs36l"/><path class="a3ch5yb2h"/></g>`,
		"fallback": "iconmind:beer-mug-outline-bold",
	});
}

export default Component;
