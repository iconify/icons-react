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
		"content": `<style>.iau37ab1m {
  d: path("M2.5 3.5h19v13h-19Zm9.5 13v4m-4 0h8");
}

.pl2c7ejrt {
  d: path("M8.25 10a3.75 3.75 0 1 0 7.5 0a3.75 3.75 0 1 0-7.5 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.whlonibkq {
  d: path("M12 6.25V10");
}

.wtxn3qbfy {
  fill: currentColor;
  d: path("M8.25 10a3.75 3.75 0 0 0 7.5 0Z");
}
</style><g class="ulnmmdpxh"><path class="iau37ab1m"/><path class="pl2c7ejrt"/><path class="wtxn3qbfy"/><path class="whlonibkq"/></g>`,
		"fallback": "uix-sharp:dark-web-monitor",
	});
}

export default Component;
