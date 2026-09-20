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
		"content": `<style>.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.i6z46-gcv {
  d: path("m13.5 9 3 3");
}

.kodna-rjk {
  d: path("M13.5 15a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v3a2 2 0 0 1 -2 2h-4a2 2 0 0 1 -2 -2Z");
}

.pus9z-bwo {
  d: path("m12 2 3 3 -3 3 -3 -3Z");
}

.r64foyb_z {
  d: path("m10.5 9 -3 3");
}

.tyihvpb9r {
  d: path("M2.5 15a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v3a2 2 0 0 1 -2 2h-4a2 2 0 0 1 -2 -2Z");
}
</style><g class="hntgybcog"><path class="pus9z-bwo"/><path class="r64foyb_z"/><path class="i6z46-gcv"/><path class="tyihvpb9r"/><path class="kodna-rjk"/></g>`,
		"fallback": "iconmind:expert-router-outline-thin",
	});
}

export default Component;
