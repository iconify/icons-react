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
		"content": `<style>.crv4i00bu {
  d: path("M4 3v18");
}

.gn1ganbdv {
  d: path("M10.5 10a1.5 1.5 0 0 1 3 0");
}

.lulmb9b1a {
  d: path("M4 4h16v12H4");
}

.nkm-qac_y {
  fill: currentColor;
  d: path("M9 10h6v3H9Z");
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

.zofa9qbxh {
  d: path("M9 10h6v3H9Z");
}
</style><g class="s0phu2bbs"><path class="nkm-qac_y"/><path class="crv4i00bu"/><path class="lulmb9b1a"/><path class="zofa9qbxh"/><path class="gn1ganbdv"/></g>`,
		"fallback": "iconmind:frozen-checkpoint-duotone-bold",
	});
}

export default Component;
