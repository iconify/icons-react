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
		"content": `<style>.ahtra4brk {
  fill: currentColor;
  d: path("M13.5 5.5h3.25v13H13.5Z");
}

.dtg1k2boz {
  d: path("M4.5 2.5h15v19h-15Zm6.25 0v19");
}

.iqd8hj7pe {
  d: path("M4.5 9h6.25M4.5 15h6.25");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="dtg1k2boz"/><path class="ahtra4brk"/><path class="iqd8hj7pe"/></g>`,
		"fallback": "uix-sharp:credit-column",
	});
}

export default Component;
