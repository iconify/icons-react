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
		"content": `<style>.adiugjbhs {
  d: path("m15 9 3 3 -3 3");
}

.bwuo0ywji {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("m15 9 3 3 -3 3");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ixcncacmy {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("m4 3 6 6v6l-6 6");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.p-hshlbhd {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M11 12h7");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.ps3-67b_v {
  d: path("m4 3 6 6v6l-6 6");
}

.wlia6bb5b {
  d: path("M11 12h7");
}
</style><g class="hntgybcog"><path class="ixcncacmy"/><path class="p-hshlbhd"/><path class="bwuo0ywji"/><path class="ps3-67b_v"/><path class="wlia6bb5b"/><path class="adiugjbhs"/></g>`,
		"fallback": "iconmind:encoder-duotone-thin",
	});
}

export default Component;
