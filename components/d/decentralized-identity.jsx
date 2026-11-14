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
		"content": `<style>.hecannbus {
  d: path("m15.745 17.03l3.535-3.535l2.475 2.475l-3.535 3.535Z");
}

.tsscxrbxn {
  d: path("M9.8 19.5H2.5v-15h19v7.3");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ztl0l6a8k {
  d: path("M6.5 9.5a2 2 0 1 0 4 0a2 2 0 1 0-4 0ZM5 17q0-2.5 3.5-2.5q3.386 0 3.496 2.34M14.5 9.5h4m-5.005 9.78l3.535-3.535l2.475 2.475l-3.535 3.535Z");
}
</style><g class="ulnmmdpxh"><path class="tsscxrbxn"/><path class="ztl0l6a8k"/><path class="hecannbus"/></g>`,
		"fallback": "uix-sharp:decentralized-identity",
	});
}

export default Component;
