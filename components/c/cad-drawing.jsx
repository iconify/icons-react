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

.qdv00pyqu {
  d: path("M13.5 6.5A3.5 3.5 0 0 1 10 10");
}

.qfokc8b1a {
  d: path("M10 6.5h7.5v7h-11v-7m3.5 0V10");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="iau37ab1m"/><path class="qfokc8b1a"/><path class="qdv00pyqu"/></g>`,
		"fallback": "uix-sharp:cad-drawing",
	});
}

export default Component;
