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
		"content": `<style>.lz0zzub6r {
  fill: currentColor;
  d: path("M12 13.25S10.5 15 10.5 16a1.5 1.5 0 0 0 3 0c0-1-1.5-2.75-1.5-2.75Z");
}

.rs9h633ij {
  d: path("M7 15.25a5 5 0 1 0 10 0a5 5 0 1 0-10 0Zm-4.5 0H7m10 0h4.5m-12.25-10a2.75 2.75 0 1 0 5.5 0a2.75 2.75 0 1 0-5.5 0ZM12 8v2.25m0-5l1.5-1.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="rs9h633ij"/><path class="lz0zzub6r"/></g>`,
		"fallback": "uix-sharp:gas-compressor-station",
	});
}

export default Component;
