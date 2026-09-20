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
		"content": `<style>.bo88vlbuz {
  d: path("M16 8a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.bos0j4biy {
  d: path("M3 21h18");
}

.fozhwebbv {
  d: path("M10 6a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.wc595gblk {
  d: path("M4 8a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.yak33lb9w {
  d: path("M3 19a9 9 0 0 1 18 0");
}
</style><g class="hntgybcog"><path class="wc595gblk"/><path class="fozhwebbv"/><path class="bo88vlbuz"/><path class="yak33lb9w"/><path class="bos0j4biy"/></g>`,
		"fallback": "iconmind:friends-outline-thin",
	});
}

export default Component;
