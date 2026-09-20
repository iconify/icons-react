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
		"content": `<style>.k_2z93bzc {
  fill: currentColor;
  d: path("M11 12a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.n3p0zmbop {
  d: path("M11 12a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}

.nogsotb5y {
  fill: currentColor;
  d: path("M14 4h4a3 3 0 0 1 3 3v10a3 3 0 0 1 -3 3H6a3 3 0 0 1 -3 -3V7a3 3 0 0 1 3 -3h4");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.o72p0hsyz {
  d: path("M14 4h4a3 3 0 0 1 3 3v10a3 3 0 0 1 -3 3H6a3 3 0 0 1 -3 -3V7a3 3 0 0 1 3 -3h4");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.vdjbxw5wp {
  d: path("M7 10a2 2 0 0 1 2 -2h6a2 2 0 0 1 2 2v4a2 2 0 0 1 -2 2H9a2 2 0 0 1 -2 -2Z");
}

.xmpryg7fh {
  fill: currentColor;
  d: path("M7 10a2 2 0 0 1 2 -2h6a2 2 0 0 1 2 2v4a2 2 0 0 1 -2 2H9a2 2 0 0 1 -2 -2Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}
</style><g class="s0phu2bbs"><path class="nogsotb5y"/><path class="xmpryg7fh"/><path class="k_2z93bzc"/><path class="o72p0hsyz"/><path class="vdjbxw5wp"/><path class="n3p0zmbop"/></g>`,
		"fallback": "iconmind:image-mask-duotone-bold",
	});
}

export default Component;
