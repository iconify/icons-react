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
		"content": `<style>.imssvxb2k {
  d: path("M7 14h10v3c0 2 -1.5 3 -3 3h-4c-1.5 0 -3 -1 -3 -3Z");
}

.nr9v4bbah {
  d: path("M6 4h12l-3 3H9Z");
}

.rzzkxobrl {
  fill: currentColor;
  d: path("M7 14h10v3c0 2 -1.5 3 -3 3h-4c-1.5 0 -3 -1 -3 -3Z");
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

.sfjortb-o {
  d: path("M12 7v5");
}

.un6-mvbuk {
  fill: currentColor;
  d: path("M6 4h12l-3 3H9Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}
</style><g class="s0phu2bbs"><path class="un6-mvbuk"/><path class="rzzkxobrl"/><path class="nr9v4bbah"/><path class="sfjortb-o"/><path class="imssvxb2k"/></g>`,
		"fallback": "iconmind:coffee-brewing-duotone-bold",
	});
}

export default Component;
