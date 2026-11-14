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
		"content": `<style>.pzy-g82oo {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.25 20.75L7 9.5a5.5 2.5 45 0 1 7.5 7.5ZM17.5 3l1.029 2.084l2.3.334l-1.665 1.623l.393 2.291L17.5 8.25l-2.057 1.082l.393-2.291l-1.665-1.623l2.3-.334ZM10 6l1.25-3.25M18 13.5l3.5-1");
}
</style><path class="pzy-g82oo"/>`,
		"fallback": "uix-sharp:celebrate-win",
	});
}

export default Component;
