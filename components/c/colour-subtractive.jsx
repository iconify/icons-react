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
		"content": `<style>.tihk44oem {
  d: path("M6.5 15a5.5 5.5 0 1 0 11 0a5.5 5.5 0 1 0-11 0Z");
}

.u3cowbbgc {
  fill: currentColor;
  d: path("M10 9.75a5.5 5.5 0 0 1 4 0a5.5 5.5 0 0 1-2 3.5a5.5 5.5 0 0 1-2-3.5Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.xtzjn1l7u {
  d: path("M10 9a5.5 5.5 0 1 0 11 0a5.5 5.5 0 1 0-11 0Z");
}

.yfa7-xbze {
  d: path("M3 9a5.5 5.5 0 1 0 11 0A5.5 5.5 0 1 0 3 9Z");
}
</style><g class="ulnmmdpxh"><path class="yfa7-xbze"/><path class="xtzjn1l7u"/><path class="tihk44oem"/><path class="u3cowbbgc"/></g>`,
		"fallback": "uix-sharp:colour-subtractive",
	});
}

export default Component;
