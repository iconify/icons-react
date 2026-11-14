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
		"content": `<style>.gor9o5bgp {
  d: path("M10 13.75v1.75L8.5 18m1.5-2.5l1.5 2.5m3.5-4.5h.01M15 15.75v.5L14 18m1-1.75L16 18");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.uvtf2m2ph {
  d: path("m12 3l9.5 17.5h-19Zm-2 8h.01");
}
</style><g class="ulnmmdpxh"><path class="uvtf2m2ph"/><path class="gor9o5bgp"/></g>`,
		"fallback": "uix-sharp:crosswalk-kids",
	});
}

export default Component;
