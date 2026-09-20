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
		"content": `<style>.hort14fyq {
  d: path("m15 12 -6 6");
}

.mcubrkb2y {
  d: path("M2 21h20M5 21V9m14 12V9M2 9h20M5 9l5.5 -5.5h3L19 9");
}

.nood30b4z {
  d: path("m9 12 6 6");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.ugh6y_a-z {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M2 21h20M5 21V9m14 12V9M2 9h20M5 9l5.5 -5.5h3L19 9");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.xfwi30n-p {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("m9 12 6 6");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.y4-afkbhl {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("m15 12 -6 6");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="s0phu2bbs"><path class="ugh6y_a-z"/><path class="xfwi30n-p"/><path class="y4-afkbhl"/><path class="mcubrkb2y"/><path class="nood30b4z"/><path class="hort14fyq"/></g>`,
		"fallback": "iconmind:account-close-duotone-bold",
	});
}

export default Component;
