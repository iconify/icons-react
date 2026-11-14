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
		"content": `<style>.c5ui_kqau {
  d: path("M2.5 3.5h17v4h-17Zm1.5 4V18q0 .098.01.196q.009.098.028.194q.02.097.048.191q.029.094.066.184q.038.091.084.178q.046.086.101.168t.117.158t.132.145q.069.07.145.132t.158.117t.168.101q.087.046.178.084q.09.037.184.066q.094.028.191.048q.096.019.194.028T6 20h6.672M18 11.857V7.5M8.5 11H13m7.75 7.5A2.75 2.75 0 1 1 18 15.75");
}

.is8nqnbzt {
  d: path("M16.75 14.5L18 15.75L16.75 17");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="c5ui_kqau"/><path class="is8nqnbzt"/></g>`,
		"fallback": "uix-sharp:build-cache",
	});
}

export default Component;
