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
		"content": `<style>.eb_sh8rkl {
  d: path("M11.3 17H2.5V3h19v9.8");
}

.nr2kwkbiv {
  d: path("M17 15h2a3 3 0 0 1 0 6h-2");
}

.rwuwwpb_x {
  d: path("M9.5 6v8l6.5-4ZM14 18a3 3 0 1 0 6 0a3 3 0 1 0-6 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="eb_sh8rkl"/><path class="rwuwwpb_x"/><path class="nr2kwkbiv"/></g>`,
		"fallback": "uix-sharp:creator-payout",
	});
}

export default Component;
