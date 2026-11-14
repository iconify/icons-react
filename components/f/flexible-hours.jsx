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

.eyhrnt-2v {
  d: path("M6 15a6 6 0 1 0 12 0a6 6 0 1 0-12 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ttz-612zp {
  d: path("M12 11.75V15l2.25 1.25M5.251 6.957a10.5 10.5 0 0 1 13.498 0");
}
</style><g class="hntgybcog"><path class="eyhrnt-2v"/><path class="ttz-612zp"/><path class="b9rgpkbiy"/></g>`,
		"fallback": "uix:flexible-hours",
	});
}

export default Component;
