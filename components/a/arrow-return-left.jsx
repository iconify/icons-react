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
		"content": `<style>.c3fkm4ldx {
  d: path("m8.5 10.5l-4 4l4 4");
}

.hioffvymr {
  d: path("M9 5.5h5.5a4.5 4.5 0 0 1 0 9h-10");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="hioffvymr"/><path class="c3fkm4ldx"/></g>`,
		"fallback": "uix-sharp:arrow-return-left",
	});
}

export default Component;
