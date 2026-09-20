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
		"content": `<style>.epa94wwve {
  d: path("M14 11h6");
}

.f69zonn4h {
  d: path("M4 17a4 4 0 0 1 8 0");
}

.j3tm7xb5y {
  d: path("M14 15h4");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.okud9xj_d {
  d: path("M2 7a2 2 0 0 1 2 -2h16a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2H4a2 2 0 0 1 -2 -2Z");
}

.skpdqenaf {
  d: path("M6 11a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}
</style><g class="nrj6p8qat"><path class="okud9xj_d"/><path class="skpdqenaf"/><path class="f69zonn4h"/><path class="epa94wwve"/><path class="j3tm7xb5y"/></g>`,
		"fallback": "iconmind:identity-outline-regular",
	});
}

export default Component;
