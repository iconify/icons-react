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
		"content": `<style>.qq2d4c65n {
  d: path("m7.5 12l1.75 1.75l3.25-3.5m5 1.75h1");
}

.ti1ll4bjs {
  d: path("M5.5 7.5h9v9h-9Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.wrcg6qhaf {
  d: path("M2.5 4.5h19v15h-19Z");
}
</style><g class="ulnmmdpxh"><path class="wrcg6qhaf"/><path class="ti1ll4bjs"/><path class="qq2d4c65n"/></g>`,
		"fallback": "uix-sharp:checkbox-cell",
	});
}

export default Component;
