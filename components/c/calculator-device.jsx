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
		"content": `<style>.alrtihbek {
  d: path("M7 5.5h10v4H7Zm1 8h.01m3.99 0h.01m3.99 0h.01M8 18h.01M12 18h.01M16 18h.01");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.wffwdccte {
  d: path("M4 2.5h16v19H4Z");
}
</style><g class="ulnmmdpxh"><path class="wffwdccte"/><path class="alrtihbek"/></g>`,
		"fallback": "uix-sharp:calculator-device",
	});
}

export default Component;
