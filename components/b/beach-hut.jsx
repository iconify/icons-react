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
		"content": `<style>.bzqoa2bdn {
  d: path("M10 14.5h4v6h-4ZM3.5 21h17");
}

.q3mysacze {
  d: path("m4 12l8-7.5l8 7.5Zm1.5 0h13v8.5h-13Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="q3mysacze"/><path class="bzqoa2bdn"/></g>`,
		"fallback": "uix-sharp:beach-hut",
	});
}

export default Component;
