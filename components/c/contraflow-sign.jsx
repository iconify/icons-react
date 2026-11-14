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
		"content": `<style>.em74ppb7h {
  d: path("m12 2.5l10 18H2Zm-2.25 10v5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.wwjs67byu {
  d: path("m8.75 16.5l1 1l1-1m3-4v5m-1-4l1-1l1 1");
}
</style><g class="ulnmmdpxh"><path class="em74ppb7h"/><path class="wwjs67byu"/></g>`,
		"fallback": "uix-sharp:contraflow-sign",
	});
}

export default Component;
