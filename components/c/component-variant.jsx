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
		"content": `<style>.ezfuhbbdz {
  d: path("m12 2.5l9.5 9.5l-9.5 9.5L2.5 12Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ytbsx7b5w {
  d: path("m12 8.5l3.5 3.5l-3.5 3.5L8.5 12Z");
}
</style><g class="ulnmmdpxh"><path class="ezfuhbbdz"/><path class="ytbsx7b5w"/></g>`,
		"fallback": "uix-sharp:component-variant",
	});
}

export default Component;
