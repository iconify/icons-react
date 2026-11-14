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
		"content": `<style>.ddqp2ac_b {
  d: path("M3 9.5h18V21H3Zm4-7v7m10-7v7");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.v-m_eob3e {
  d: path("M9 18.25c0-4.25 2.5-6 6-6c0 3.75-2.5 6-6 6Zm0 0l3.5-3.5");
}
</style><g class="ulnmmdpxh"><path class="ddqp2ac_b"/><path class="v-m_eob3e"/></g>`,
		"fallback": "uix-sharp:dept-produce-sign",
	});
}

export default Component;
