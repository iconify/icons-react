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
		"content": `<style>.hgmgwvb2o {
  d: path("M5 18a2 2 0 1 0 4 0a2 2 0 1 0-4 0Zm10.5 0a2 2 0 1 0 4 0a2 2 0 1 0-4 0Zm-7-9.5V14M6 11.25h5");
}

.pgc-isilw {
  d: path("M2.5 6h12v11h-12Zm12 3H18l3.5 3.5V17h-7Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="pgc-isilw"/><path class="hgmgwvb2o"/></g>`,
		"fallback": "uix-sharp:ambulance-side",
	});
}

export default Component;
