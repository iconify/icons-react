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
		"content": `<style>.mj6t7h_3b {
  d: path("M2.5 4h19v16h-19Zm0 4.5h19");
}

.oa_syzmnz {
  d: path("M6.5 11.5L9 14l-2.5 2.5m5 0H17");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="mj6t7h_3b"/><path class="oa_syzmnz"/></g>`,
		"fallback": "uix-sharp:code-terminal",
	});
}

export default Component;
