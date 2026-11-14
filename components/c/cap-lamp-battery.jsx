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
		"content": `<style>.eu_odhb2n {
  d: path("M18 8h.75A2.25 2.25 0 0 1 21 10.25v7.25a2.5 2.5 0 0 1-2.5 2.5H12m-.25-13L9.5 9.75h3l-2.25 2.75");
}

.o2exwhc6e {
  d: path("M3 4h15v11.5H3Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="o2exwhc6e"/><path class="eu_odhb2n"/></g>`,
		"fallback": "uix-sharp:cap-lamp-battery",
	});
}

export default Component;
