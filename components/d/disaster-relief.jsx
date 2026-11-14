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
		"content": `<style>.fg2iajxue {
  d: path("m18 21l-2.75-3A2 2 0 1 1 18 15.75A2 2 0 1 1 20.75 18Z");
}

.ltefg0byz {
  d: path("M2.5 4h18v4.5h-18Zm11.75 17H3.75V8.5h15.5v2.9");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="ltefg0byz"/><path class="fg2iajxue"/></g>`,
		"fallback": "uix-sharp:disaster-relief",
	});
}

export default Component;
