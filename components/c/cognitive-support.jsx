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
		"content": `<style>.pt0xs0b4g {
  d: path("M8.5 21v-3.5C5.5 16 4 13 4 10c0-4.1 3.6-7.25 8-7.25c4 0 7 2.75 7.5 6.25l1.5 3.5h-1.5v3c0 1.1-.9 2-2 2h-2V21");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.z55nnwbaz {
  d: path("m10.872 7.839l.008-1.284h1.24l.008 1.284l.929.537l1.116-.635l.62 1.073l-1.108.649v1.074l1.108.649l-.62 1.073l-1.116-.635l-.929.537l-.008 1.284h-1.24l-.008-1.284l-.929-.537l-1.116.635l-.62-1.073l1.108-.649V9.463l-1.108-.649l.62-1.073l1.116.635Z");
}
</style><g class="ulnmmdpxh"><path class="pt0xs0b4g"/><path class="z55nnwbaz"/></g>`,
		"fallback": "uix-sharp:cognitive-support",
	});
}

export default Component;
