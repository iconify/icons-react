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
		"content": `<style>.k7cf1gbgu {
  cx: 5.5px;
  cy: 18.5px;
  r: 2.25px;
}

.rpg1xzbon {
  d: path("m9.25 14.75l1.25-1.25m.88-.87l1.25-1.25m.87-.88l1.25-1.25");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.yu32qrjqf {
  cx: 18.5px;
  cy: 5.5px;
  r: 2.25px;
}
</style><g class="x2cwu0gfd"><circle class="k7cf1gbgu"/><circle class="yu32qrjqf"/><path class="rpg1xzbon"/></g>`,
		"fallback": "iconoven:distance-sharp",
	});
}

export default Component;
