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

.x3a7y0b7y {
  d: path("m13.443 15.779l-2.66 1.33q-.182.091-.381.138q-.198.047-.402.047t-.402-.047t-.381-.138l-5.75-2.875q-.108-.054-.208-.123t-.19-.151q-.09-.081-.167-.175t-.141-.197t-.113-.214t-.082-.228t-.049-.237t-.017-.241V7.332q0-.121.017-.241q.016-.121.049-.237q.033-.117.082-.228t.113-.214t.141-.197t.167-.175t.19-.151t.208-.123l5.75-2.875q.182-.091.381-.138q.198-.047.402-.047t.402.047t.381.138l5.75 2.875q.109.054.208.123q.1.069.19.151t.167.175t.141.197q.064.103.113.214t.082.228t.049.237q.017.12.017.241v5.331");
}

.yirdlgj3y {
  d: path("M2.5 6.25L10 10l7.5-3.75M10 10v7.5m5 3.5l5.25-5.25m-4-.25h4.25v4.25");
}
</style><g class="hntgybcog"><path class="x3a7y0b7y"/><path class="yirdlgj3y"/></g>`,
		"fallback": "uix:background-job",
	});
}

export default Component;
