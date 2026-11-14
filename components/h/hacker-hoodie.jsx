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
		"content": `<style>.fk8cwlbhr {
  d: path("M8.5 10a3.5 4.25 0 1 0 7 0a3.5 4.25 0 1 0-7 0Zm1.5 7v2.5m4-2.5v2.5");
}

.gz_o5jq9u {
  d: path("M3 21.5v-2c0-2.25 1.5-3.75 3.5-4.5c-1-1.5-1-3.5-1-5c0-4.5 3-7.5 6.5-7.5s6.5 3 6.5 7.5c0 1.5 0 3.5-1 5c2 .75 3.5 2.25 3.5 4.5v2");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="gz_o5jq9u"/><path class="fk8cwlbhr"/></g>`,
		"fallback": "uix-sharp:hacker-hoodie",
	});
}

export default Component;
