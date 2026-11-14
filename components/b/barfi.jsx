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
		"content": `<style>.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.uqje4kcjs {
  d: path("m2.5 12l6-6l6 6l-6 6Z");
}

.v2_dcfb1x {
  d: path("M12 9.5L15.5 6l6 6l-6 6l-3.5-3.5");
}
</style><g class="ulnmmdpxh"><path class="uqje4kcjs"/><path class="v2_dcfb1x"/></g>`,
		"fallback": "uix-sharp:barfi",
	});
}

export default Component;
