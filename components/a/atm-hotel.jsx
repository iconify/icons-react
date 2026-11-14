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
		"content": `<style>.iqibz98zm {
  d: path("M7.5 5.5h9v4h-9Zm-.5 8h10m-7.5 0v5h5v-5");
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
</style><g class="ulnmmdpxh"><path class="wffwdccte"/><path class="iqibz98zm"/></g>`,
		"fallback": "uix-sharp:atm-hotel",
	});
}

export default Component;
