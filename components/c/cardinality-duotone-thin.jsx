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

.nzus6ybfu {
  fill: currentColor;
  d: path("M13 14a3 3 0 1 0 6 0 3 3 0 1 0 -6 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.r0uia_bgu {
  d: path("M19 20a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}

.ujr228b1o {
  d: path("M3 8a4 4 0 1 0 8 0 4 4 0 1 0 -8 0");
}

.v4_esibhq {
  fill: currentColor;
  d: path("M19 20a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.x8lnyu1_x {
  d: path("M13 14a3 3 0 1 0 6 0 3 3 0 1 0 -6 0");
}

.ziqm699pb {
  fill: currentColor;
  d: path("M3 8a4 4 0 1 0 8 0 4 4 0 1 0 -8 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}
</style><g class="hntgybcog"><path class="ziqm699pb"/><path class="nzus6ybfu"/><path class="v4_esibhq"/><path class="ujr228b1o"/><path class="x8lnyu1_x"/><path class="r0uia_bgu"/></g>`,
		"fallback": "iconmind:cardinality-duotone-thin",
	});
}

export default Component;
