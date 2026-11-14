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

.y66p1zl7h {
  d: path("M12 8.25L15.75 12L12 15.75L8.25 12Z");
}
</style><g class="ulnmmdpxh"><path class="ezfuhbbdz"/><path class="y66p1zl7h"/></g>`,
		"fallback": "uix-sharp:component-instance",
	});
}

export default Component;
