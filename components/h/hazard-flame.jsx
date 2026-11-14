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
		"content": `<style>.h98gxob2v {
  d: path("m13.856 4.356l5.788 5.788a2.625 2.625 0 0 1 0 3.712l-5.788 5.788a2.625 2.625 0 0 1-3.712 0l-5.788-5.788a2.625 2.625 0 0 1 0-3.712l5.788-5.788a2.625 2.625 0 0 1 3.712 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.p1zljubly {
  d: path("M12 16.5a3 3 0 0 1-3-3c0-2 1.5-3 1.5-5.5c1.5 1 2.25 2.25 2.25 3.5c.5-.5.75-1.25.75-2c1 1 1.5 2.5 1.5 4a3 3 0 0 1-3 3");
}
</style><g class="hntgybcog"><path class="h98gxob2v"/><path class="p1zljubly"/></g>`,
		"fallback": "uix:hazard-flame",
	});
}

export default Component;
