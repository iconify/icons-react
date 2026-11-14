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
		"content": `<style>.eojd6r6gr {
  d: path("M14 10a2 2 0 1 0 4 0a2 2 0 1 0-4 0Zm-8 3.5l2 2m3 0l3.75-4");
}

.shyg3sdzw {
  d: path("M2.5 12a2 2 0 1 0 4 0a2 2 0 1 0-4 0Zm5 5a2 2 0 1 0 4 0a2 2 0 1 0-4 0Zm3.5-7a5 5 0 1 0 10 0a5 5 0 1 0-10 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="shyg3sdzw"/><path class="eojd6r6gr"/></g>`,
		"fallback": "uix-sharp:functional-group",
	});
}

export default Component;
