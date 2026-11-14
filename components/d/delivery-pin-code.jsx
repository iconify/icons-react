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
		"content": `<style>.bxupwsbml {
  d: path("M14.75 14.75h6.5v6.5h-6.5Zm3.25 0v6.5M14.75 18h6.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.viwic4blx {
  d: path("M11.9 19.5H2.5v-17h17v9.4m-17-4.4h17");
}
</style><g class="ulnmmdpxh"><path class="viwic4blx"/><path class="bxupwsbml"/></g>`,
		"fallback": "uix-sharp:delivery-pin-code",
	});
}

export default Component;
