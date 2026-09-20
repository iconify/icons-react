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
		"content": `<style>.bos0j4biy {
  d: path("M3 21h18");
}

.elc06ob4j {
  d: path("M8 8h8");
}

.hiyoc5bih {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M14 2H5v15h14V7");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.kkm03rbxe {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M3 21h18");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.l0v-b4kbr {
  d: path("M8 12h8");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.tkhdrzhel {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M8 8h8");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.um18atgqz {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M8 12h8");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.w-pek8c8r {
  d: path("M14 2H5v15h14V7");
}
</style><g class="s0phu2bbs"><path class="hiyoc5bih"/><path class="tkhdrzhel"/><path class="um18atgqz"/><path class="kkm03rbxe"/><path class="w-pek8c8r"/><path class="elc06ob4j"/><path class="l0v-b4kbr"/><path class="bos0j4biy"/></g>`,
		"fallback": "iconmind:grounding-duotone-bold",
	});
}

export default Component;
