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
		"content": `<style>.u18tiwbnj {
  d: path("m8.75 9.25l2-2l2 2");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.yh3o8-b_d {
  d: path("M12 2.25L21.75 12L12 21.75L2.25 12Z");
}

.zeluocbvi {
  d: path("M13.25 16.5v-2.75c0-1.75-2.5-1.75-2.5-3.5v-3");
}
</style><g class="ulnmmdpxh"><path class="yh3o8-b_d"/><path class="zeluocbvi"/><path class="u18tiwbnj"/></g>`,
		"fallback": "uix-sharp:bend-left-sign",
	});
}

export default Component;
