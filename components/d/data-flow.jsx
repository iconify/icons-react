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
		"content": `<style>.joc_c_b3v {
  d: path("M17.25 7L19 8.75L20.75 7M19 15.25c0 2.5-2 4-4.5 4H8");
}

.o_8b89jzt {
  d: path("M2.75 4.75a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0Zm14 7.25a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0Zm-14 7.25a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0ZM8 4.75h6.5c2.5 0 4.5 1.5 4.5 4");
}

.sokq-oczf {
  d: path("M9.75 17.5L8 19.25L9.75 21");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="o_8b89jzt"/><path class="joc_c_b3v"/><path class="sokq-oczf"/></g>`,
		"fallback": "uix-sharp:data-flow",
	});
}

export default Component;
