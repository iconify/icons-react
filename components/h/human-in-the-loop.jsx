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
		"content": `<style>.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ildoaibfm {
  d: path("M7.5 20.25c0-3 2-5.25 4.5-5.25s4.5 2.25 4.5 5.25a1 1 0 0 1-1 1h-7a1 1 0 0 1-1-1");
}

.kz9qc0sgp {
  cx: 12px;
  cy: 9.75px;
  r: 2.25px;
}

.s86wwrbuj {
  d: path("M6.15 13.13a6.75 6.75 0 1 1 11.7 0m2.41-.65l-2.41.65l-.65-2.42");
}
</style><g class="hntgybcog"><path class="s86wwrbuj"/><circle class="kz9qc0sgp"/><path class="ildoaibfm"/></g>`,
		"fallback": "iconoven:human-in-the-loop",
	});
}

export default Component;
