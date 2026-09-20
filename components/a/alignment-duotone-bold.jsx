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
		"content": `<style>.gbufit2ck {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M3 7h6l4 4");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.getxdpbnc {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M3 17h6l4 -4");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.holoa3bic {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("m16 9 3 3 -3 3");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.lpthwr95f {
  d: path("M3 17h6l4 -4");
}

.qlfruhq7c {
  d: path("M13 12h5");
}

.r5u5lrb-w {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M13 12h5");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.tw3a5bcpe {
  d: path("M3 7h6l4 4");
}

.zpl29uvhf {
  d: path("m16 9 3 3 -3 3");
}
</style><g class="s0phu2bbs"><path class="gbufit2ck"/><path class="getxdpbnc"/><path class="r5u5lrb-w"/><path class="holoa3bic"/><path class="tw3a5bcpe"/><path class="lpthwr95f"/><path class="qlfruhq7c"/><path class="zpl29uvhf"/></g>`,
		"fallback": "iconmind:alignment-duotone-bold",
	});
}

export default Component;
