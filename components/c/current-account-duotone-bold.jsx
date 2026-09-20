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
		"content": `<style>.ae0h5kb0o {
  d: path("M9 15h6");
}

.c86fwkbjz {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M9 15h6");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.d6pr-0b9u {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M9 18h6");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.ht9zq9bpv {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M9 12h6");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.mcubrkb2y {
  d: path("M2 21h20M5 21V9m14 12V9M2 9h20M5 9l5.5 -5.5h3L19 9");
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

.x1_r36phd {
  d: path("M9 12h6");
}

.x3sflacnk {
  d: path("M9 18h6");
}
</style><g class="s0phu2bbs"><path class="ugh6y_a-z"/><path class="ht9zq9bpv"/><path class="c86fwkbjz"/><path class="d6pr-0b9u"/><path class="mcubrkb2y"/><path class="x1_r36phd"/><path class="ae0h5kb0o"/><path class="x3sflacnk"/></g>`,
		"fallback": "iconmind:current-account-duotone-bold",
	});
}

export default Component;
