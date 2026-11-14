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
		"content": `<style>.aeui5abjf {
  d: path("m17.75 14l1.029 2.084l2.3.334l-1.665 1.623l.393 2.291l-2.057-1.082l-2.057 1.082l.393-2.291l-1.665-1.623l2.3-.334Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.yozeedcdg {
  d: path("M12.7 21H2.5V6.5h19v7.2m-13-7.2v-2A1.5 1.5 0 0 1 10 3h4a1.5 1.5 0 0 1 1.5 1.5v2m-13 5h13.4m3.7 0h1.9");
}
</style><g class="ulnmmdpxh"><path class="yozeedcdg"/><path class="aeui5abjf"/></g>`,
		"fallback": "uix-sharp:briefcase-star",
	});
}

export default Component;
