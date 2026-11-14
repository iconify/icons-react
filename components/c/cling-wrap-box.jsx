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
		"content": `<style>.ackg-fb3x {
  d: path("M9.5 12L16 9l5 1.5V17");
}

.ir_1-rbys {
  d: path("M6.5 15a3 3 0 1 0 6 0a3 3 0 1 0-6 0Zm3 0h.01");
}

.ujgeyzb3n {
  d: path("M3 9h13v12H3V9l1.5-6.25");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="ujgeyzb3n"/><path class="ackg-fb3x"/><path class="ir_1-rbys"/></g>`,
		"fallback": "uix-sharp:cling-wrap-box",
	});
}

export default Component;
