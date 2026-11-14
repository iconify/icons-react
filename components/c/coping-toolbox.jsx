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
		"content": `<style>.p2rpd_bqi {
  d: path("m12.075 2.398l4.698 1.711l-1.026 2.819l-4.698-1.71ZM10.25 11.5h3.5v3h-3.5Z");
}

.pu5r6cscu {
  d: path("M3 11.5h18V21H3Zm1.941-8.506l16.914 6.157L21 11.5L4.086 5.344Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="pu5r6cscu"/><path class="p2rpd_bqi"/></g>`,
		"fallback": "uix-sharp:coping-toolbox",
	});
}

export default Component;
