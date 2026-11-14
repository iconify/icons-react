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
		"content": `<style>.d0jfembef {
  d: path("M14.75 18a3.25 3.25 0 1 0 6.5 0a3.25 3.25 0 1 0-6.5 0Z");
}

.os3sbd6kh {
  d: path("M12.444 20.5H3.5v-10L12 3.25l8.5 7.25v1.956");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.zhl-6bcgv {
  fill: currentColor;
  d: path("M18 14.75a3.25 3.25 0 0 1 0 6.5Z");
}
</style><g class="ulnmmdpxh"><path class="os3sbd6kh"/><path class="d0jfembef"/><path class="zhl-6bcgv"/></g>`,
		"fallback": "uix-sharp:home-mode",
	});
}

export default Component;
