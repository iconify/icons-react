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
		"content": `<style>.har_uhbbo {
  d: path("M8 9.25a2.5 2.5 0 1 1-2.5 2.5m9.5 5.5L16.5 13l1.5 4.25L19.5 13l1.5 4.25");
}

.idp12kr9q {
  d: path("M2.5 11.75a5.5 5.5 0 1 0 11 0a5.5 5.5 0 1 0-11 0Zm5.5 5.5h13.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="idp12kr9q"/><path class="har_uhbbo"/></g>`,
		"fallback": "uix-sharp:artificial-grass-roll",
	});
}

export default Component;
