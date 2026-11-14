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

.ca02y1mkm {
  d: path("M12.894 20.069L8.5 18.5l-6 2.5V5.5l6-2.5l7 2.5l6-2.5v10.667M8.5 3v15.5m7-13v6.8");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="ca02y1mkm"/><path class="aeui5abjf"/></g>`,
		"fallback": "uix-sharp:badge-explorer",
	});
}

export default Component;
