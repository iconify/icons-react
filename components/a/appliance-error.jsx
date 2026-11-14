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
		"content": `<style>.hgry25bre {
  d: path("M6 11h8.5v4.5H6Zm12 3.5V18m0 3h.01");
}

.j-3v3pb8a {
  d: path("M15.2 19H2.5V2.5H18v9.2M2.5 7.5H18M6 5h.01M9.5 5h.01");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="j-3v3pb8a"/><path class="hgry25bre"/></g>`,
		"fallback": "uix-sharp:appliance-error",
	});
}

export default Component;
