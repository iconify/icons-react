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
		"content": `<style>.l56b1ab2g {
  d: path("M9 19a5.75 13 0 0 1 11.5 0");
}

.mlibkbluq {
  d: path("M2.5 19h19m-18 0a5.5 9 0 0 1 11 0");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ycdl3bbay {
  fill: currentColor;
  d: path("M2 19a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0Zm5.5 0a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0Zm5.5 0a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0Zm6 0a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0Z");
}

.yo-mktbdh {
  d: path("M14.5 19a3 5 0 0 1 6 0");
}
</style><g class="ulnmmdpxh"><path class="mlibkbluq"/><path class="l56b1ab2g"/><path class="yo-mktbdh"/><path class="ycdl3bbay"/></g>`,
		"fallback": "uix-sharp:chart-arc-diagram",
	});
}

export default Component;
