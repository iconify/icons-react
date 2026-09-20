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
		"content": `<style>.crv4i00bu {
  d: path("M4 3v18");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.hob4evbuj {
  d: path("M9 9a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.hrabrxb6m {
  d: path("M11.5 9.5 15 13");
}

.lulmb9b1a {
  d: path("M4 4h16v12H4");
}
</style><g class="hntgybcog"><path class="crv4i00bu"/><path class="lulmb9b1a"/><path class="hob4evbuj"/><path class="hrabrxb6m"/></g>`,
		"fallback": "iconmind:find-checkpoint-outline-thin",
	});
}

export default Component;
