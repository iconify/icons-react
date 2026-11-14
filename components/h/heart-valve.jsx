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
		"content": `<style>.bzsz_zb3m {
  d: path("M12 20S3 14.5 3 8.75C3 6.1 5.1 4 7.75 4C9.5 4 11.1 5 12 6.5C12.9 5 14.5 4 16.25 4C18.9 4 21 6.1 21 8.75C21 14.5 12 20 12 20");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.vz2irlb-g {
  d: path("M8.5 7.75c1.5.5 2.75 1.5 3.5 3m3.5-3c-1.5.5-2.75 1.5-3.5 3m0 1.75v3.75m-1.75-1.75L12 16.25l1.75-1.75");
}
</style><g class="hntgybcog"><path class="bzsz_zb3m"/><path class="vz2irlb-g"/></g>`,
		"fallback": "uix:heart-valve",
	});
}

export default Component;
