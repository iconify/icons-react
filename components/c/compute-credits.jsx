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
		"content": `<style>.lw_lbimly {
  d: path("M11.2 17.5H4.5v-13h13v7.7");
}

.nr2kwkbiv {
  d: path("M17 15h2a3 3 0 0 1 0 6h-2");
}

.oxxi-xkux {
  d: path("M13.4 13.5H8.5v-5h5v4.9M9 2.5v2m4-2v2M2.5 9h2m-2 4h2m13-4h2M9 17.5v2m5-1.5a3 3 0 1 0 6 0a3 3 0 1 0-6 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="lw_lbimly"/><path class="oxxi-xkux"/><path class="nr2kwkbiv"/></g>`,
		"fallback": "uix-sharp:compute-credits",
	});
}

export default Component;
