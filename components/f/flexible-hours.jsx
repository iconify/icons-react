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
		"content": `<style>.b9rgpkbiy {
  d: path("m16.25 7.25l2.5-.25V4.5m-11 2.75L5.25 7V4.5");
}

.om3xhjljw {
  d: path("M6 15a6 6 0 1 0 12 0a6 6 0 1 0-12 0Z");
}

.ttz-612zp {
  d: path("M12 11.75V15l2.25 1.25M5.251 6.957a10.5 10.5 0 0 1 13.498 0");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="om3xhjljw"/><path class="ttz-612zp"/><path class="b9rgpkbiy"/></g>`,
		"fallback": "uix-sharp:flexible-hours",
	});
}

export default Component;
