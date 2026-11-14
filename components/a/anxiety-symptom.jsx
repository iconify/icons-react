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
		"content": `<style>.ep6jl2t2z {
  d: path("M2.5 12a9.5 9.5 0 1 0 19 0a9.5 9.5 0 1 0-19 0Zm6-1h.01m3.99 0h.01M8.5 16h4");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.w8nb3k8ma {
  d: path("M16.5 6.75s-1.5 2-1.5 3a1.5 1.5 0 0 0 3 0c0-1-1.5-3-1.5-3Z");
}
</style><g class="ulnmmdpxh"><path class="ep6jl2t2z"/><path class="w8nb3k8ma"/></g>`,
		"fallback": "uix-sharp:anxiety-symptom",
	});
}

export default Component;
