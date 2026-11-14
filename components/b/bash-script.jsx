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
		"content": `<style>.o0uxpabcc {
  d: path("M2.5 3.5h19v17h-19Z");
}

.owrp88rnz {
  d: path("M10.5 9.5C10.25 8.25 9.25 7.75 8 7.75c-1.5 0-2.5.75-2.5 2c0 2.5 5 1.75 5 4.5c0 1.25-1 2-2.5 2c-1.25 0-2.25-.5-2.5-1.5M8 6.25v11.5m5.5-1.25H18");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="o0uxpabcc"/><path class="owrp88rnz"/></g>`,
		"fallback": "uix-sharp:bash-script",
	});
}

export default Component;
