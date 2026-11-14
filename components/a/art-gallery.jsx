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

.gmgc7cb8h {
  d: path("M7.5 20.5v-5h3v5m3-5.5H22v7h-8.5Z");
}

.iowa4hb8u {
  d: path("M5.25 10.75v9.75h5.45m8.05-8.35v-1.4");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="eqoe0pbrn"/><path class="iowa4hb8u"/><path class="gmgc7cb8h"/></g>`,
		"fallback": "uix-sharp:art-gallery",
	});
}

export default Component;
