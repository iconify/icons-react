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
		"content": `<style>.d7smd9b8i {
  d: path("M2 8h13a3.5 3.5 0 1 0 -3.5 -3.5");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.v5_ol6yqz {
  d: path("M2 17h12a3.5 3.5 0 1 0 -3.5 3.5");
}

.v9env5b1n {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M2 8h13a3.5 3.5 0 1 0 -3.5 -3.5");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.vvl_z_bnk {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M2 17h12a3.5 3.5 0 1 0 -3.5 3.5");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="s0phu2bbs"><path class="v9env5b1n"/><path class="vvl_z_bnk"/><path class="d7smd9b8i"/><path class="v5_ol6yqz"/></g>`,
		"fallback": "iconmind:breeze-duotone-bold",
	});
}

export default Component;
