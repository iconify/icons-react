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
		"content": `<style>.lg-i4xlvf {
  d: path("m12 12.25l.882 2.036l2.209.21l-1.664 1.468l.483 2.165L12 17l-1.91 1.129l.483-2.165l-1.664-1.468l2.209-.21Z");
}

.sa23nmb2h {
  d: path("M3.5 5h17v15.5h-17ZM8 3v4m8-4v4M3.5 10h17");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="sa23nmb2h"/><path class="lg-i4xlvf"/></g>`,
		"fallback": "uix-sharp:calendar-star",
	});
}

export default Component;
