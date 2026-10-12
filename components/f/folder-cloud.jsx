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
		"content": `<style>.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.iijes1b3n {
  d: path("M9.75 16.5h4.75a1.75 1.75 0 0 0 .25-3.48a2.75 2.75 0 0 0-5.3-.5a2 2 0 0 0 .3 3.98");
}

.rna0n-spg {
  d: path("M2.75 7.25a2.5 2.5 0 0 1 2.5-2.5h3.6a2 2 0 0 1 1.6.8L11.55 7a2 2 0 0 0 1.6.8h5.6a2.5 2.5 0 0 1 2.5 2.5v6.45a2.5 2.5 0 0 1-2.5 2.5H5.25a2.5 2.5 0 0 1-2.5-2.5Z");
}
</style><g class="hntgybcog"><path class="rna0n-spg"/><path class="iijes1b3n"/></g>`,
		"fallback": "iconoven:folder-cloud",
	});
}

export default Component;
