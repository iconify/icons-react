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
		"content": `<style>.fg8libqda {
  d: path("M4 19a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.k5nz3bcao {
  d: path("M6 7.5v9");
}

.kn0tcm93r {
  d: path("M4 5a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.pw61xnbei {
  d: path("M16 19a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.z11tjprpk {
  d: path("M18 16.5V9h-6L9 6");
}
</style><g class="hntgybcog"><path class="kn0tcm93r"/><path class="k5nz3bcao"/><path class="fg8libqda"/><path class="pw61xnbei"/><path class="z11tjprpk"/></g>`,
		"fallback": "iconmind:git-pull-request-outline-thin",
	});
}

export default Component;
