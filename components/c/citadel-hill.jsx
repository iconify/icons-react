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
		"content": `<style>.hhzzfhlue {
  d: path("M2.5 21h19m-19 0c3.5-5.5 15.5-5.5 19 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.x81y27bap {
  d: path("M5.5 18.25V4H9v7h1.75V9h2.5v2H15V4h3.5v14.25");
}
</style><g class="hntgybcog"><path class="hhzzfhlue"/><path class="x81y27bap"/></g>`,
		"fallback": "uix:citadel-hill",
	});
}

export default Component;
