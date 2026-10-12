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
		"content": `<style>.p7g0aqa0d {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.75 4.5H21l-.49.56l-6.02 6.88l-.49.56v5h-4v-5l-.49-.56l-6.02-6.88L3 4.5zm2.75 4h11");
}

.rvy044akg {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M12 20.25h.01");
}

.ux2u0rbkq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
}
</style><g class="ux2u0rbkq"><path class="p7g0aqa0d"/><path class="rvy044akg"/></g>`,
		"fallback": "iconoven:funnel-stages-sharp",
	});
}

export default Component;
