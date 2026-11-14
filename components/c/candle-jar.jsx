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
		"content": `<style>.a7br98xvq {
  d: path("M5 9.75h14V21.5H5Zm7-7.25c1.5 1.5 1.75 2.25 1.75 2.75a1.75 1.75 0 0 1-3.5 0c0-.5.25-1.25 1.75-2.75ZM12 7v2.75");
}

.q4nsz-hoc {
  d: path("M8 13.5h8v4H8Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="a7br98xvq"/><path class="q4nsz-hoc"/></g>`,
		"fallback": "uix-sharp:candle-jar",
	});
}

export default Component;
