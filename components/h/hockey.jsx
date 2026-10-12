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
		"content": `<style>.dqnf_0bnc {
  d: path("m7.5 2.75l5.35 14.35a2 2 0 0 0 1.87 1.4h6.53");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.kn25ncb6c {
  width: 6.75px;
  height: 3.75px;
  x: 3.25px;
  y: 16.75px;
  rx: 1.75px;
}
</style><g class="hntgybcog"><path class="dqnf_0bnc"/><rect class="kn25ncb6c"/></g>`,
		"fallback": "iconoven:hockey",
	});
}

export default Component;
