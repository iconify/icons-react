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
		"content": `<style>.qpxtoghjb {
  d: path("M12.5 20.5H3v-18h15V12");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.x95klnb5i {
  d: path("M9 6.5L6.5 9L9 11.5m3-5L14.5 9L12 11.5m5.372 4.339l.052-1.038h1.152l.052 1.038l.929.537l.925-.474l.576.997l-.873.564v1.074l.873.564l-.576.997l-.925-.474l-.929.537l-.052 1.038h-1.152l-.052-1.038l-.929-.537l-.925.474l-.576-.997l.873-.564v-1.074l-.873-.564l.576-.997l.925.474Z");
}
</style><g class="ulnmmdpxh"><path class="qpxtoghjb"/><path class="x95klnb5i"/></g>`,
		"fallback": "uix-sharp:compile",
	});
}

export default Component;
