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
		"content": `<style>.atblrbcxz {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M18 8v12");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.dznv025mt {
  d: path("M6 14h12");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.lzc28-gln {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M6 14h12");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.pb147jbda {
  d: path("M6 8v12");
}

.s9jzbjbwv {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M3 8h18");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.vhnbtvbtn {
  d: path("M3 8h18");
}

.wfoy3xxos {
  d: path("M18 8v12");
}

.ynwr4ebzk {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M6 8v12");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="hntgybcog"><path class="s9jzbjbwv"/><path class="ynwr4ebzk"/><path class="atblrbcxz"/><path class="lzc28-gln"/><path class="vhnbtvbtn"/><path class="pb147jbda"/><path class="wfoy3xxos"/><path class="dznv025mt"/></g>`,
		"fallback": "iconmind:hurdles-duotone-thin",
	});
}

export default Component;
