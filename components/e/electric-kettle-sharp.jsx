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
		"content": `<style>.dwnhvlaym {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M8 19h.01");
}

.jxn4ujnfb {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M15.95 6.75h3.8v8h-3.2m-7.05-6v4.75m-4.75 3.25h14.5v4.5H4.75z");
}

.uodidwbkw {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M10.75 2.75h2.5m-4.5 2.5h7l.13 1.49l.74 8.52l.13 1.49H6.25l.13-1.49l.74-8.52l.13-1.49zm-1.65 2l-3.85-2");
}

.ux2u0rbkq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
}
</style><g class="ux2u0rbkq"><path class="uodidwbkw"/><path class="jxn4ujnfb"/><path class="dwnhvlaym"/></g>`,
		"fallback": "iconoven:electric-kettle-sharp",
	});
}

export default Component;
