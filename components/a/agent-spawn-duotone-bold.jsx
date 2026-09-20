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
		"content": `<style>.b1gugcbsg {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M13.9 2.92a4.5 4.5 0 1 1 -3.8 0");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.ldlcwabvd {
  d: path("M13.5 14.83a3.5 3.5 0 1 1 -2.96 0");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.s7ozdl3pu {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M13.5 14.83a3.5 3.5 0 1 1 -2.96 0");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.tqmlicc3x {
  d: path("M12 11.5v3");
}

.uubgsvb6s {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M12 11.5v3");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.vlnz0-j6y {
  d: path("M13.9 2.92a4.5 4.5 0 1 1 -3.8 0");
}
</style><g class="s0phu2bbs"><path class="b1gugcbsg"/><path class="uubgsvb6s"/><path class="s7ozdl3pu"/><path class="vlnz0-j6y"/><path class="tqmlicc3x"/><path class="ldlcwabvd"/></g>`,
		"fallback": "iconmind:agent-spawn-duotone-bold",
	});
}

export default Component;
