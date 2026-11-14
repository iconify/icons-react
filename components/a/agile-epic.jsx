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
		"content": `<style>.b-m78xnig {
  d: path("M14.5 2.5L4.5 14h7l-2 7.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.zprq61b6i {
  d: path("m9.5 21.5l10-11.5h-7l2-7.5");
}
</style><g class="ulnmmdpxh"><path class="b-m78xnig"/><path class="zprq61b6i"/></g>`,
		"fallback": "uix-sharp:agile-epic",
	});
}

export default Component;
