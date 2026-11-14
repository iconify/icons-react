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
		"content": `<style>.eorzvx_sw {
  d: path("M6.5 2.5v15h15");
}

.hic28wblm {
  d: path("M2.5 6.5h15v15");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.wvmk1jbtq {
  d: path("M9.5 14.5L12 12l2.5 2.5m-.5-5h.01");
}
</style><g class="ulnmmdpxh"><path class="eorzvx_sw"/><path class="hic28wblm"/><path class="wvmk1jbtq"/></g>`,
		"fallback": "uix-sharp:crop-image",
	});
}

export default Component;
