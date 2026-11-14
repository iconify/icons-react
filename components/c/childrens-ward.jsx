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
		"content": `<style>.lsahrw0eu {
  d: path("M11 12.25a2.5 1.75 0 1 0 5 0a2.5 1.75 0 1 0-5 0Z");
}

.stv3xrboj {
  fill: currentColor;
  d: path("M11 6.25a.75.75 0 1 0 1.5 0a.75.75 0 1 0-1.5 0Zm3.5 0a.75.75 0 1 0 1.5 0a.75.75 0 1 0-1.5 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.wge7tfb_u {
  d: path("M3 4v16.5m0-6h18v6M3 18h18M11.5 8a2 2 0 1 0 4 0a2 2 0 1 0-4 0Z");
}
</style><g class="ulnmmdpxh"><path class="wge7tfb_u"/><path class="stv3xrboj"/><path class="lsahrw0eu"/></g>`,
		"fallback": "uix-sharp:childrens-ward",
	});
}

export default Component;
