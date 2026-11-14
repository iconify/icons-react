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
		"content": `<style>.apmo4tbvn {
  d: path("M12 16s-4-2.25-4-5c0-1.4 1-2.5 2.25-2.5c.75 0 1.35.4 1.75 1c.4-.6 1-1 1.75-1C15 8.5 16 9.6 16 11c0 2.75-4 5-4 5Z");
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
</style><g class="ulnmmdpxh"><path class="hpkep8bsv"/><path class="apmo4tbvn"/></g>`,
		"fallback": "uix-sharp:comment-heart",
	});
}

export default Component;
