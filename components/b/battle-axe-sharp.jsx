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
		"content": `<style>.rip_g9cqu {
  cx: 12px;
  cy: 19.25px;
  r: 2px;
}

.sreeq_hqq {
  d: path("M12 2.75v14.5");
}

.upfrolbgt {
  d: path("M12 7.75h2q2-.5 4-3.5q4.5 5.75 0 11.5q-2-3-4-3.5h-2Zm0 0h-2q-2-.5-4-3.5Q1.5 10 6 15.75q2-3 4-3.5h2Z");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="sreeq_hqq"/><circle class="rip_g9cqu"/><path class="upfrolbgt"/></g>`,
		"fallback": "iconoven:battle-axe-sharp",
	});
}

export default Component;
