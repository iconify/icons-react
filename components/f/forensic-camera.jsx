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
		"content": `<style>.co3lfibsu {
  d: path("M8 12a3 3 0 1 0 6 0a3 3 0 1 0-6 0Zm7.25 5.5a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0Zm4 1.75L21 21");
}

.nur2wpb3a {
  d: path("M12.5 18h-10V6h17v6.9M5.5 6V3h4v3");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="nur2wpb3a"/><path class="co3lfibsu"/></g>`,
		"fallback": "uix-sharp:forensic-camera",
	});
}

export default Component;
