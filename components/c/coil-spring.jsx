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
		"content": `<style>.cxojlr4il {
  d: path("M6.5 13.5a5.5 2 0 1 0 11 0a5.5 2 0 1 0-11 0Z");
}

.n3n76zkys {
  d: path("M6.5 17.5a5.5 2 0 1 0 11 0a5.5 2 0 1 0-11 0Zm0 2.5v1.5");
}

.rfx29db4d {
  d: path("M6.5 9.5a5.5 2 0 1 0 11 0a5.5 2 0 1 0-11 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.v6u8rtb_l {
  d: path("M6.5 5.5a5.5 2 0 1 0 11 0a5.5 2 0 1 0-11 0Z");
}
</style><g class="ulnmmdpxh"><path class="v6u8rtb_l"/><path class="rfx29db4d"/><path class="cxojlr4il"/><path class="n3n76zkys"/></g>`,
		"fallback": "uix-sharp:coil-spring",
	});
}

export default Component;
