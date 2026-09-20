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
		"content": `<style>.aq9rwyo4r {
  d: path("m6 16 4 -4 4 4");
}

.g7d56fjnv {
  fill: currentColor;
  d: path("M2 6a2 2 0 0 1 2 -2h16a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2H4a2 2 0 0 1 -2 -2Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.prmm2xb5p {
  d: path("M17 7v4");
}

.vyks9vbfn {
  d: path("M2 6a2 2 0 0 1 2 -2h16a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2H4a2 2 0 0 1 -2 -2Z");
}

.whw90dbes {
  d: path("M15 9h4");
}
</style><g class="nrj6p8qat"><path class="g7d56fjnv"/><path class="vyks9vbfn"/><path class="aq9rwyo4r"/><path class="prmm2xb5p"/><path class="whw90dbes"/></g>`,
		"fallback": "iconmind:image-generation-duotone-regular",
	});
}

export default Component;
