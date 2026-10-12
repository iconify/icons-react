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
		"content": `<style>.cgeon5wki {
  cx: 13.71px;
  cy: 10.29px;
  r: 2.5px;
}

.qmnyfnbre {
  d: path("M11.5 16.5a4 4 0 1 1-8 0a4 4 0 1 1 8 0");
}

.r0i38ebaj {
  d: path("M20.5 5.5a2 2 0 1 1-4 0a2 2 0 1 1 4 0");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="qmnyfnbre"/><circle class="cgeon5wki"/><path class="r0i38ebaj"/></g>`,
		"fallback": "iconoven:depth-of-field-sharp",
	});
}

export default Component;
