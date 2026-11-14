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
		"content": `<style>.jdgrh3byr {
  d: path("M2.5 13Q13 13 21 9q-3.25 8-8 10H2.5");
}

.maifqw57t {
  d: path("M12 12.5V6h6.25Q21 6 21 9");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="jdgrh3byr"/><path class="maifqw57t"/></g>`,
		"fallback": "uix-sharp:bow-pulpit",
	});
}

export default Component;
