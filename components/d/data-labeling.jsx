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
		"content": `<style>.cq2mflbmn {
  d: path("M11.2 17.5H2.5v-14h17v8.3");
}

.jujxzbcuv {
  d: path("m2.5 14.5l5-5l3.697 3.697M12.75 8a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0ZM14 14.5h4.25l3.5 3.5l-3.5 3.5H14Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="cq2mflbmn"/><path class="jujxzbcuv"/></g>`,
		"fallback": "uix-sharp:data-labeling",
	});
}

export default Component;
