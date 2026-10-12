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
		"content": `<style>.czd18bbiq {
  d: path("M13.75 13.75h-1.5a2.25 2.25 0 0 0 0 4.5h1.5");
}

.hjru5mbwv {
  cx: 12px;
  cy: 4px;
  r: 1.25px;
}

.jgh_rbbfq {
  d: path("M12 5.25v5.5m-5.5 0h11v10.5h-11z");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><circle class="hjru5mbwv"/><path class="jgh_rbbfq"/><path class="czd18bbiq"/></g>`,
		"fallback": "iconoven:clutch-pedal-sharp",
	});
}

export default Component;
