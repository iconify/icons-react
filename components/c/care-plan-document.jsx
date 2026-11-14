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
		"content": `<style>.db0hvl-ej {
  d: path("M8.5 8.75c0 3.75 7 .75 7 4.5m-2.75 3L14.5 18l2.5-2.75");
}

.eoz3zibrm {
  d: path("M4.5 2.5h15v19h-15Z");
}

.rrxiuy_pd {
  fill: currentColor;
  d: path("M7.25 6.75a1.25 1.25 0 1 0 2.5 0a1.25 1.25 0 1 0-2.5 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="eoz3zibrm"/><path class="rrxiuy_pd"/><path class="db0hvl-ej"/></g>`,
		"fallback": "uix-sharp:care-plan-document",
	});
}

export default Component;
