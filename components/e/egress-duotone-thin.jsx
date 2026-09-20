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
		"content": `<style>.avz09zu-i {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M8 12h12");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.bzecsub_a {
  d: path("M8 12h12");
}

.ftqzjnb8u {
  d: path("M6 3v18");
}

.gv3gpab3b {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("m17 9 3 3 -3 3");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ja0_o1hya {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M6 3v18");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.mi_m6achy {
  d: path("m17 9 3 3 -3 3");
}
</style><g class="hntgybcog"><path class="ja0_o1hya"/><path class="avz09zu-i"/><path class="gv3gpab3b"/><path class="ftqzjnb8u"/><path class="bzecsub_a"/><path class="mi_m6achy"/></g>`,
		"fallback": "iconmind:egress-duotone-thin",
	});
}

export default Component;
