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
		"content": `<style>.ae-e09b3w {
  d: path("M3 12h18");
}

.h7j2x7b-d {
  d: path("M14 15h5v4h-5Z");
}

.j8_8pdbyc {
  d: path("M12 3v9");
}

.mzsthfbrb {
  fill: currentColor;
  d: path("M3 5a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2H5a2 2 0 0 1 -2 -2Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.nzpsuduik {
  d: path("M3 5a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2H5a2 2 0 0 1 -2 -2Z");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.y7cs2bcxe {
  fill: currentColor;
  d: path("M14 15h5v4h-5Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}
</style><g class="s0phu2bbs"><path class="mzsthfbrb"/><path class="y7cs2bcxe"/><path class="nzpsuduik"/><path class="ae-e09b3w"/><path class="j8_8pdbyc"/><path class="h7j2x7b-d"/></g>`,
		"fallback": "iconmind:holiday-apartment-duotone-bold",
	});
}

export default Component;
