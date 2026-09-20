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
		"content": `<style>.emvotkb4z {
  d: path("M4 20 20 4");
}

.goxocdc6s {
  d: path("M10 4h10v10");
}

.mdpdt-b6d {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M10 4h10v10");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.mlwueibtu {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M4 20 20 4");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}
</style><g class="s0phu2bbs"><path class="mlwueibtu"/><path class="mdpdt-b6d"/><path class="emvotkb4z"/><path class="goxocdc6s"/></g>`,
		"fallback": "iconmind:arrow-external-duotone-bold",
	});
}

export default Component;
