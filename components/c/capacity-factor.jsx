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
		"content": `<style>.sijnwbbdx {
  d: path("M5 5a2 2 0 1 0 4 0a2 2 0 1 0-4 0Zm10 6a2 2 0 1 0 4 0a2 2 0 1 0-4 0Zm2.5-8l-11 10M3 16.5h18V21H3Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.wsdg-rb5h {
  fill: currentColor;
  d: path("M3 16.5h12.5V21H3Z");
}
</style><g class="ulnmmdpxh"><path class="sijnwbbdx"/><path class="wsdg-rb5h"/></g>`,
		"fallback": "uix-sharp:capacity-factor",
	});
}

export default Component;
