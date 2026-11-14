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
		"content": `<style>.g-crmbcrr {
  d: path("m17.372 15.839l.052-1.038h1.152l.052 1.038l.929.537l.925-.474l.576.997l-.873.564v1.074l.873.564l-.576.997l-.925-.474l-.929.537l-.052 1.038h-1.152l-.052-1.038l-.929-.537l-.925.474l-.576-.997l.873-.564v-1.074l-.873-.564l.576-.997l.925.474Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.xerjt1b0y {
  d: path("M12.8 21H2.5V6.5h19v5.7m-13-5.7v-2A1.5 1.5 0 0 1 10 3h4a1.5 1.5 0 0 1 1.5 1.5v2m-13 5h19");
}
</style><g class="ulnmmdpxh"><path class="xerjt1b0y"/><path class="g-crmbcrr"/></g>`,
		"fallback": "uix-sharp:briefcase-settings",
	});
}

export default Component;
