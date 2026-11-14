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
		"content": `<style>.csijbhbkc {
  d: path("M2.5 14.5h11.2m-3.7-6V21m4.5-3.5h7V22h-7Zm1.75 0v-1.25a1.75 1.75 0 0 1 3.5-.5");
}

.n7l0cjbkf {
  d: path("M11.7 21H2.5V3h19v10.1");
}

.o_ig-3bmg {
  fill: currentColor;
  d: path("M2.5 8.5V5a2 2 0 0 1 2-2h15a2 2 0 0 1 2 2v3.5Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="n7l0cjbkf"/><path class="o_ig-3bmg"/><path class="csijbhbkc"/></g>`,
		"fallback": "uix-sharp:dataset-public",
	});
}

export default Component;
