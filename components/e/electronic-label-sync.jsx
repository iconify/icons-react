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
		"content": `<style>.at8lcxbbh {
  d: path("M12.1 18H2.5V5h19v8.1");
}

.pr-xiqbis {
  d: path("M16.75 13.5L18 14.75L16.75 16m2.5 3.5L18 20.75L19.25 22");
}

.t8wxqg2nx {
  d: path("M8.75 9.75C8.5 9 8 8.5 7 8.5S5.25 9 5.25 10c0 1.5 3.5 1 3.5 3c0 1-.75 1.5-1.75 1.5s-1.5-.5-1.75-1M7 7.25V8.5m0 6v1.25M11.5 9H18m-6.5 4h1.8m6.2 2.152A3 3 0 0 1 18 20.75m-1.5-.402A3 3 0 0 1 18 14.75");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="at8lcxbbh"/><path class="t8wxqg2nx"/><path class="pr-xiqbis"/></g>`,
		"fallback": "uix-sharp:electronic-label-sync",
	});
}

export default Component;
