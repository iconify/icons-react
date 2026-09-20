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
		"content": `<style>.d5_zy-93t {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M4 13a7 7 0 0 1 4.95 2.05");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.emvotkb4z {
  d: path("M4 20 20 4");
}

.h4houcuor {
  d: path("M4 13a7 7 0 0 1 4.95 2.05");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ireg5-o3k {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M4 20 20 4");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.oifr9zbpt {
  d: path("M4 20h16");
}

.yu-j7jb_g {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M4 20h16");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="hntgybcog"><path class="ireg5-o3k"/><path class="yu-j7jb_g"/><path class="d5_zy-93t"/><path class="emvotkb4z"/><path class="oifr9zbpt"/><path class="h4houcuor"/></g>`,
		"fallback": "iconmind:cosine-duotone-thin",
	});
}

export default Component;
