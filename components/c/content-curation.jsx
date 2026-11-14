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
		"content": `<style>.cnui5acqx {
  d: path("M6.5 3.5H19a2 2 0 0 1 2 2v8M6 14.75L9.5 11l2.5 2.5m2.25-3.75h.01M17.75 14l1.029 2.084l2.3.334l-1.665 1.623l.393 2.291l-2.057-1.082l-2.057 1.082l.393-2.291l-1.665-1.623l2.3-.334Z");
}

.pt9u1hbmo {
  d: path("M11.5 17.5H3v-11h15v1.7");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="pt9u1hbmo"/><path class="cnui5acqx"/></g>`,
		"fallback": "uix-sharp:content-curation",
	});
}

export default Component;
