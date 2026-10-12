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
		"content": `<style>.pggb5vyct {
  d: path("M10.5 4.25c3.5 3.9 5.75 7.2 5.75 10.25a5.75 5.75 0 0 1-11.5 0c0-3.05 2.25-6.35 5.75-10.25Z");
}

.w83dn0t2h {
  d: path("m7.75 15l.159 2.12L10 17.5m8.25-14.75l.36 2.64l2.64.36l-2.64.36l-.36 2.64l-.36-2.64l-2.64-.36l2.64-.36z");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="pggb5vyct"/><path class="w83dn0t2h"/></g>`,
		"fallback": "iconoven:clean-water-sharp",
	});
}

export default Component;
