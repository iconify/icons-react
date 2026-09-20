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
		"content": `<style>.cuzdohbno {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("m4 13 9 -9");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.hpm6v1-ys {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M3 20h18");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.jkuojibnm {
  d: path("M3 20h18");
}

.nljj47nag {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M4 6v14");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.qq9-4ficr {
  d: path("m4 13 9 -9");
}

.rjl8fe1sw {
  d: path("M4 6v14");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}
</style><g class="s0phu2bbs"><path class="nljj47nag"/><path class="cuzdohbno"/><path class="hpm6v1-ys"/><path class="rjl8fe1sw"/><path class="qq9-4ficr"/><path class="jkuojibnm"/></g>`,
		"fallback": "iconmind:admission-control-duotone-bold",
	});
}

export default Component;
