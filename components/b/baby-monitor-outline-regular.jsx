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
		"content": `<style>.hus3yob9r {
  d: path("M7 7a2 2 0 0 1 2 -2h6a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2H9a2 2 0 0 1 -2 -2Z");
}

.jlfjgzbqx {
  d: path("M9 9h6");
}

.lcz1l6b5w {
  d: path("m15 5 3 -3");
}

.me177l4bh {
  d: path("M11 17a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}
</style><g class="nrj6p8qat"><path class="hus3yob9r"/><path class="lcz1l6b5w"/><path class="jlfjgzbqx"/><path class="me177l4bh"/></g>`,
		"fallback": "iconmind:baby-monitor-outline-regular",
	});
}

export default Component;
