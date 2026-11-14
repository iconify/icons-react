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
		"content": `<style>.dad3i6b9n {
  d: path("M7 7.5a5 5 0 1 0 10 0a5 5 0 1 0-10 0Z");
}

.ni2ubtqou {
  d: path("M2.5 15.5a5 5 0 1 0 10 0a5 5 0 1 0-10 0Z");
}

.pgedkobgv {
  d: path("M11.5 15.5a5 5 0 1 0 10 0a5 5 0 1 0-10 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="dad3i6b9n"/><path class="ni2ubtqou"/><path class="pgedkobgv"/></g>`,
		"fallback": "uix-sharp:colour-triadic",
	});
}

export default Component;
