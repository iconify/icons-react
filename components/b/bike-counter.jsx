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
		"content": `<style>.a206a4bym {
  d: path("M5.5 10a2 2 0 1 0 4 0a2 2 0 1 0-4 0Zm9 0a2 2 0 1 0 4 0a2 2 0 1 0-4 0Z");
}

.bmn5facjv {
  d: path("M2.5 2.5h19V15h-19ZM12 15v6.5m-3 0h6");
}

.knz1v6b1l {
  d: path("M7.5 10H11l3-4l2.5 4");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="bmn5facjv"/><path class="a206a4bym"/><path class="knz1v6b1l"/></g>`,
		"fallback": "uix-sharp:bike-counter",
	});
}

export default Component;
