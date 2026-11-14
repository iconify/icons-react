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
		"content": `<style>.eqoe0pbrn {
  d: path("m3 8.5l1.5-5h15l1.5 5a2.25 2.25 0 0 1-4.5 0a2.25 2.25 0 0 1-4.5 0a2.25 2.25 0 0 1-4.5 0a2.25 2.25 0 0 1-4.5 0Z");
}

.kxcdqacba {
  d: path("M8 20.5v-5h4v5m3.75-6.75h5l-1.5 1.75c2.25 1 2.5 2.75 2.25 4s-1.25 2-3.25 2s-3-.75-3.25-2s0-3 2.25-4Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.xdkxoofmo {
  d: path("M5.25 10.75v9.75h7.15");
}
</style><g class="ulnmmdpxh"><path class="eqoe0pbrn"/><path class="xdkxoofmo"/><path class="kxcdqacba"/></g>`,
		"fallback": "uix-sharp:antique-shop",
	});
}

export default Component;
