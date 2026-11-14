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
		"content": `<style>.ai3jb6bri {
  d: path("M4.75 11.5a2 2 0 1 0 4 0a2 2 0 1 0-4 0Zm1 2l-.5 3m2.5-3l.5 3M18 21.75c-1.75 0-3-1.25-3-3c0-2 2-3 2.5-4.75c2.25 1.25 3.5 3 3.5 4.75s-1.25 3-3 3Z");
}

.jjw1h4bjd {
  d: path("M12.4 17.5H2.5v-14h19v10M6 7h12m-6.5 3.5h4.1m1.3 0H18");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="jjw1h4bjd"/><path class="ai3jb6bri"/></g>`,
		"fallback": "uix-sharp:gas-safety-certificate",
	});
}

export default Component;
