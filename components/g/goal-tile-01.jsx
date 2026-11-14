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
		"content": `<style>.gu54sabzd {
  d: path("M10 12a2 2 0 1 0 4 0a2 2 0 1 0-4 0Zm2 0l4.5-4.5m-1.75 0h1.75v1.75");
}

.kouyg8b6l {
  d: path("M3.5 3.5h17v17h-17Z");
}

.rq866kbao {
  d: path("M6.5 12a5.5 5.5 0 1 0 11 0a5.5 5.5 0 1 0-11 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="kouyg8b6l"/><path class="rq866kbao"/><path class="gu54sabzd"/></g>`,
		"fallback": "uix-sharp:goal-tile-01",
	});
}

export default Component;
