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
		"content": `<style>.hpkep8bsv {
  d: path("m7.5 19.5l-3.5 1L5 17a8.5 8.5 0 1 1 2.5 2.5Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.wavdnck2y {
  d: path("m14.828 7.257l1.415 1.415l-6.011 6.01l-1.768.354l.354-1.768Z");
}
</style><g class="ulnmmdpxh"><path class="hpkep8bsv"/><path class="wavdnck2y"/></g>`,
		"fallback": "uix-sharp:comment-edit",
	});
}

export default Component;
