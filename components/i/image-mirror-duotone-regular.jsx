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
		"content": `<style>.aho6qjb9y {
  d: path("M8 10v9");
}

.do7jur_bk {
  fill: currentColor;
  d: path("M2 12a2 2 0 0 1 2 -2h16a2 2 0 0 1 2 2v5a2 2 0 0 1 -2 2H4a2 2 0 0 1 -2 -2Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.gau_gkswx {
  d: path("M10.5 3.5 8 6l2.5 2.5");
}

.lmn7kfb_m {
  d: path("M13.5 3.5 16 6l-2.5 2.5");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.odx_lab8a {
  d: path("M10 6h4");
}

.s229edbfl {
  d: path("M15 10v9");
}

.z-ephs7jm {
  d: path("M2 12a2 2 0 0 1 2 -2h16a2 2 0 0 1 2 2v5a2 2 0 0 1 -2 2H4a2 2 0 0 1 -2 -2Z");
}
</style><g class="nrj6p8qat"><path class="do7jur_bk"/><path class="z-ephs7jm"/><path class="aho6qjb9y"/><path class="s229edbfl"/><path class="odx_lab8a"/><path class="lmn7kfb_m"/><path class="gau_gkswx"/></g>`,
		"fallback": "iconmind:image-mirror-duotone-regular",
	});
}

export default Component;
