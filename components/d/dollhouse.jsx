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
		"content": `<style>.bqv97e68q {
  d: path("M3.5 10.5L12 3.25l8.5 7.25v10h-17Zm0 3h17");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.zsf37rsiq {
  d: path("M10 7.5h4V11h-4Zm0 13v-4h4v4");
}
</style><g class="ulnmmdpxh"><path class="bqv97e68q"/><path class="zsf37rsiq"/></g>`,
		"fallback": "uix-sharp:dollhouse",
	});
}

export default Component;
