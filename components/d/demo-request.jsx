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
		"content": `<style>.ga_sosbfj {
  d: path("m9.75 6.5l5.5 3.5l-5.5 3.5ZM18 15v6m-3-3h6");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.wojy1qvcu {
  d: path("M12.2 16.5H2.5v-13h19v11.7M12 16.5V21m-2.25 0h4.5");
}
</style><g class="ulnmmdpxh"><path class="wojy1qvcu"/><path class="ga_sosbfj"/></g>`,
		"fallback": "uix-sharp:demo-request",
	});
}

export default Component;
