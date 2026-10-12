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
		"content": `<style>.mqi_9y1ci {
  cx: 6.75px;
  cy: 12px;
  r: 2.25px;
}

.oowrt5-ty {
  d: path("M6.75 7.25v2.5m0 4.5v2.5M9 5.5c4.25.75 8.25 2.5 8.25 4.25m0 4.5c0 1.75-4 3.5-8.25 4.25");
}

.qzwdqpbyi {
  cx: 6.75px;
  cy: 19px;
  r: 2.25px;
}

.ry3mbqbyv {
  cx: 17.25px;
  cy: 12px;
  r: 2.25px;
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.x5uj4pbbv {
  cx: 6.75px;
  cy: 5px;
  r: 2.25px;
}
</style><g class="x2cwu0gfd"><circle class="x5uj4pbbv"/><circle class="mqi_9y1ci"/><circle class="qzwdqpbyi"/><circle class="ry3mbqbyv"/><path class="oowrt5-ty"/></g>`,
		"fallback": "iconoven:git-log-sharp",
	});
}

export default Component;
