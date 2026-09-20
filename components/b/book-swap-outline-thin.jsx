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
		"content": `<style>.haq_xipgt {
  d: path("M12 5h7");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.jg_hsfbse {
  d: path("m16 2 3 3 -3 3");
}

.s3__1tw1n {
  d: path("M2 5a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2H4a2 2 0 0 1 -2 -2Z");
}

.ve7daj9ul {
  d: path("M14 11a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-4a2 2 0 0 1 -2 -2Z");
}
</style><g class="hntgybcog"><path class="s3__1tw1n"/><path class="ve7daj9ul"/><path class="haq_xipgt"/><path class="jg_hsfbse"/></g>`,
		"fallback": "iconmind:book-swap-outline-thin",
	});
}

export default Component;
