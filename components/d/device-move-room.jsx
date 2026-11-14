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
		"content": `<style>.hqntv7b-g {
  d: path("m9.5 3l2 2l-2 2M15 21v-3.5h3.5V21");
}

.q_a3l74xm {
  d: path("M2.5 14.5H9V21H2.5Zm9.5-3L16.75 7l4.75 4.5V21H12Zm-6.25.25V5h5.75");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="q_a3l74xm"/><path class="hqntv7b-g"/></g>`,
		"fallback": "uix-sharp:device-move-room",
	});
}

export default Component;
