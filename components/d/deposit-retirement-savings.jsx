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
		"content": `<style>.mmdn7nbyg {
  d: path("M6 17c1.186.494 2.84.793 4.592.896m2.766.003c1.771-.101 3.445-.4 4.642-.899M12 2.75c3 0 5 4.5 5 7.5s-2.25 5-5 5s-5-2-5-5s2-7.5 5-7.5Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.wo47cwb9v {
  d: path("M2.5 13c0 5 4 8 9.5 8s9.5-3 9.5-8m-19 0h2.1m14.8 0h2.1");
}
</style><g class="ulnmmdpxh"><path class="wo47cwb9v"/><path class="mmdn7nbyg"/></g>`,
		"fallback": "uix-sharp:deposit-retirement-savings",
	});
}

export default Component;
