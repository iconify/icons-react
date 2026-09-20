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
		"content": `<style>.gorvssbqo {
  d: path("M17.5 9.5 20 12l-2.5 2.5");
}

.ixdgj062g {
  d: path("M3 6a2 2 0 0 1 2 -2h9a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2H5a2 2 0 0 1 -2 -2Z");
}

.lea6bf2wj {
  fill: currentColor;
  d: path("M3 6a2 2 0 0 1 2 -2h9a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2H5a2 2 0 0 1 -2 -2Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.lqiw_3bos {
  d: path("M10 12h7");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}
</style><g class="s0phu2bbs"><path class="lea6bf2wj"/><path class="ixdgj062g"/><path class="lqiw_3bos"/><path class="gorvssbqo"/></g>`,
		"fallback": "iconmind:data-exfil-duotone-bold",
	});
}

export default Component;
