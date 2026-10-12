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
		"content": `<style>.iymx8nbvx {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M17 13.25h3.75v6.25");
}

.ufuby1bfx {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.25 2.75H17v18.5H3.25zm0 8H17");
}

.ux2u0rbkq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
}

.uxk8nvd9q {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M10.125 6.75h.01");
}
</style><g class="ux2u0rbkq"><path class="ufuby1bfx"/><path class="uxk8nvd9q"/><path class="iymx8nbvx"/></g>`,
		"fallback": "iconoven:air-fryer-sharp",
	});
}

export default Component;
