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
		"content": `<style>.lk34aujzq {
  d: path("M8.5 21.5v-4h2.9m.1 1.2v2.8m5.872-5.661l.052-1.038h1.152l.052 1.038l.929.537l.925-.474l.576.997l-.873.564v1.074l.873.564l-.576.997l-.925-.474l-.929.537l-.052 1.038h-1.152l-.052-1.038l-.929-.537l-.925.474l-.576-.997l.873-.564v-1.074l-.873-.564l.576-.997l.925.474Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ysjvju5oo {
  d: path("M13.1 21.5H3.5v-19h13V12m-9-5h1m3 0h1m-5 4h1m3 0h1");
}
</style><g class="ulnmmdpxh"><path class="ysjvju5oo"/><path class="lk34aujzq"/></g>`,
		"fallback": "uix-sharp:company-settings",
	});
}

export default Component;
