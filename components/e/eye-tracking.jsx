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
		"content": `<style>.de1w5-bpp {
  d: path("M14.988 12.729C13.565 14.177 11.771 15 9.75 15C6.6 15 4 13 2.5 9.75C4 6.5 6.6 4.5 9.75 4.5s5.75 2 7.25 5.25a12 12 0 0 1-.495.958");
}

.go6pe-p9f {
  d: path("M7.25 9.75a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0Zm7.75 8a2.75 2.75 0 1 0 5.5 0a2.75 2.75 0 1 0-5.5 0Zm2.75-4.25V22m-4.25-4.25H22");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="de1w5-bpp"/><path class="go6pe-p9f"/></g>`,
		"fallback": "uix-sharp:eye-tracking",
	});
}

export default Component;
