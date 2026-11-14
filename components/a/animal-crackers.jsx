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
		"content": `<style>.ht61m558z {
  d: path("M9.5 7v4a2.25 2.25 0 0 0 4.5 0V7M6 9.5h.01m10.99.75h.01M18.25 13h.01");
}

.s3mlkjqsl {
  d: path("M3 9a3.5 3.5 0 0 1 6.5-2H18a3 3 0 0 1 3 3v10h-3.5v-3.5h-5V20h-3v-6c-1.5 0-3 1-3 3v3h-3Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="s3mlkjqsl"/><path class="ht61m558z"/></g>`,
		"fallback": "uix-sharp:animal-crackers",
	});
}

export default Component;
