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
		"content": `<style>.ritsq9bab {
  d: path("M8.25 20.5L7.5 18l2.75.25");
}

.rzrub9_sj {
  d: path("M2.75 12a3.25 3.25 0 1 0 6.5 0a3.25 3.25 0 1 0-6.5 0Zm12 0a3.25 3.25 0 1 0 6.5 0a3.25 3.25 0 1 0-6.5 0ZM7.5 6q4.5-3.5 9 0");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.wkz3zj77z {
  d: path("M15.75 3.5L16.5 6l-2.75-.25M16.5 18q-4.5 3.5-9 0");
}
</style><g class="ulnmmdpxh"><path class="rzrub9_sj"/><path class="wkz3zj77z"/><path class="ritsq9bab"/></g>`,
		"fallback": "uix-sharp:crypto-exchange-rate",
	});
}

export default Component;
