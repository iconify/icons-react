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
		"content": `<style>.lcj9fhsvt {
  d: path("M5 3.5c5.5 0 7 3.5 7 12");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.wf2v4gb1c {
  d: path("M8.25 11.75L12 15.5l3.75-3.75M7.5 20.5h9");
}
</style><g class="ulnmmdpxh"><path class="lcj9fhsvt"/><path class="wf2v4gb1c"/></g>`,
		"fallback": "uix-sharp:de-escalate",
	});
}

export default Component;
