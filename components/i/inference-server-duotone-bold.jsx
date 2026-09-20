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
		"content": `<style>.a7vpafiwa {
  d: path("M6 12a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}

.l6cp2-b8s {
  fill: currentColor;
  d: path("M6 12a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.lu1q1nb0a {
  d: path("M3 10a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v4a2 2 0 0 1 -2 2H5a2 2 0 0 1 -2 -2Z");
}

.mj2jevaaa {
  fill: currentColor;
  d: path("m13 9.5 2.5 2.5 -2.5 2.5Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.ovo8937oa {
  fill: currentColor;
  d: path("M3 10a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v4a2 2 0 0 1 -2 2H5a2 2 0 0 1 -2 -2Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.x7zkl-bdz {
  d: path("m13 9.5 2.5 2.5 -2.5 2.5Z");
}
</style><g class="s0phu2bbs"><path class="ovo8937oa"/><path class="l6cp2-b8s"/><path class="mj2jevaaa"/><path class="lu1q1nb0a"/><path class="a7vpafiwa"/><path class="x7zkl-bdz"/></g>`,
		"fallback": "iconmind:inference-server-duotone-bold",
	});
}

export default Component;
