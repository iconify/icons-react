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
		"content": `<style>.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.zdgu3ybil {
  d: path("M2.5 12a9.5 9.5 0 1 0 19 0a9.5 9.5 0 1 0-19 0Z");
}

.zm5rv1fdq {
  d: path("M12 5.5a6.5 6.5 0 0 1 6.5 6.5M12 12l3-3m-3 3h.01");
}
</style><g class="ulnmmdpxh"><path class="zdgu3ybil"/><path class="zm5rv1fdq"/></g>`,
		"fallback": "uix-sharp:boost-gauge",
	});
}

export default Component;
