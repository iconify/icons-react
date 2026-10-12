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
		"content": `<style>.mx0ir3bdi {
  cx: 12px;
  cy: 6.75px;
  r: 4px;
}

.nkr9g212d {
  d: path("M3.75 14.75v6.5h16.5v-6.5");
}

.oopw_-ooc {
  d: path("m13.13 5.77l-.35-.75h-1.94v.86c0 1.22 2.34.61 2.34 1.78v.83h-2.018l-.292-.73M12 13.25v5m-2.5-2.5l2.5 2.5l2.5-2.5");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><circle class="mx0ir3bdi"/><path class="oopw_-ooc"/><path class="nkr9g212d"/></g>`,
		"fallback": "iconoven:deposit-sharp",
	});
}

export default Component;
