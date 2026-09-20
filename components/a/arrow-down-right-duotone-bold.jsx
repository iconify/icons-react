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
		"content": `<style>.cejwj-bns {
  d: path("M10 20h10V10");
}

.n2zbf-bhd {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("m4 4 16 16");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.po51cnplk {
  d: path("m4 4 16 16");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.suiv92b3o {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M10 20h10V10");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="s0phu2bbs"><path class="n2zbf-bhd"/><path class="suiv92b3o"/><path class="po51cnplk"/><path class="cejwj-bns"/></g>`,
		"fallback": "iconmind:arrow-down-right-duotone-bold",
	});
}

export default Component;
