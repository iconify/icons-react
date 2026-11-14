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
		"content": `<style>.p_8-wubmj {
  d: path("M12.5 20h-9V3h12v7.8m0-6.8h1.75q.098 0 .195.019t.188.057t.173.093q.081.054.151.124t.124.151q.055.082.093.173t.057.188t.019.195v6.036");
}

.pr-xiqbis {
  d: path("M16.75 13.5L18 14.75L16.75 16m2.5 3.5L18 20.75L19.25 22");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.w-bawcpon {
  d: path("M9.5 14C7.75 12.75 6 11.5 6 9.5c0-1.25 1-2.25 2.25-2.25c.5 0 1 .25 1.25.75c.25-.5.75-.75 1.25-.75C12 7.25 13 8.25 13 9.5c0 2-1.75 3.25-3.5 4.5Zm10 1.152A3 3 0 0 1 18 20.75m-1.5-.402A3 3 0 0 1 18 14.75");
}
</style><g class="ulnmmdpxh"><path class="p_8-wubmj"/><path class="w-bawcpon"/><path class="pr-xiqbis"/></g>`,
		"fallback": "uix-sharp:card-spinner",
	});
}

export default Component;
