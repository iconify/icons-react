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
		"content": `<style>.f-_5m5bnq {
  d: path("m13.5 18.5l1.25-2.75L16 18.5a1.25 1.25 0 0 1-2.5 0Zm6 0l1.25-2.75L22 18.5a1.25 1.25 0 0 1-2.5 0Z");
}

.gwb_l-__o {
  d: path("M11.044 20.5H3.5v-10L12 3.25l8.162 6.962M17.75 14v7.5m-1.5 0h3m-4.5-5.75h6");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="gwb_l-__o"/><path class="f-_5m5bnq"/></g>`,
		"fallback": "uix-sharp:family-court",
	});
}

export default Component;
