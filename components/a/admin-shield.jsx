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
		"content": `<style>.ctmcg-tip {
  d: path("m12 2.5l7.5 2.75V11c0 5-3.25 8.5-7.5 10.5c-4.25-2-7.5-5.5-7.5-10.5V5.25Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.z3dgrhbvm {
  d: path("M8 15V9.5l2 2.5l2-3.5l2 3.5l2-2.5V15Z");
}
</style><g class="ulnmmdpxh"><path class="ctmcg-tip"/><path class="z3dgrhbvm"/></g>`,
		"fallback": "uix-sharp:admin-shield",
	});
}

export default Component;
