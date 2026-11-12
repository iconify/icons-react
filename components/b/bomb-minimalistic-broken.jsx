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
		"content": `<style>.aa_n4rjmb {
  d: path("M5.75 8.00337C6.85315 7.36523 8.13392 7 9.5 7C13.6421 7 17 10.3579 17 14.5C17 18.6421 13.6421 22 9.5 22C5.35786 22 2 18.6421 2 14.5C2 13.1339 2.36523 11.8531 3.00337 10.75");
}

.ipq1z-bjh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.m99yuxjsm {
  d: path("M17 7L15 9");
}

.n04922jxw {
  d: path("M19 5L20 4");
}

.wlfsgdzfw {
  d: path("M16 3.5L16.5 4.5");
}

.zsnush0dj {
  d: path("M19.5 7.5L20.5 8");
}
</style><g class="ipq1z-bjh"><path class="m99yuxjsm"/><path class="zsnush0dj"/><path class="wlfsgdzfw"/><path class="n04922jxw"/><path class="aa_n4rjmb"/></g>`,
		"fallback": "solar:bomb-minimalistic-broken",
	});
}

export default Component;
