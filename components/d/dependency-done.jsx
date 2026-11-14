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
		"content": `<style>.rhiiq-naf {
  d: path("m5.25 13.5l2 2l2-2m5.5 4.5l2 2L21 15.75");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.vcyc4b3ql {
  d: path("M2.5 3H12v5.5H2.5Zm0 12.5H12V21H2.5Zm4.75-7v7");
}
</style><g class="ulnmmdpxh"><path class="vcyc4b3ql"/><path class="rhiiq-naf"/></g>`,
		"fallback": "uix-sharp:dependency-done",
	});
}

export default Component;
