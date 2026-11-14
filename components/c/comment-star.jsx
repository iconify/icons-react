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
		"content": `<style>.d55fzrb3n {
  d: path("m12 7.5l1.323 2.68l2.957.429l-2.14 2.086l.505 2.946L12 14.25l-2.645 1.391l.505-2.946l-2.14-2.086l2.957-.429Z");
}

.hpkep8bsv {
  d: path("m7.5 19.5l-3.5 1L5 17a8.5 8.5 0 1 1 2.5 2.5Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="hpkep8bsv"/><path class="d55fzrb3n"/></g>`,
		"fallback": "uix-sharp:comment-star",
	});
}

export default Component;
