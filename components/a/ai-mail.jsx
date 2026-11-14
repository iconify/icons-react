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
		"content": `<style>.eyb9oh05b {
  d: path("M3 9h13v11H3Z");
}

.liuz0k01q {
  d: path("m4.5 11l5 4l5-4m3.25-7.25l.75 1.75l1.75.75L18.5 7l-.75 1.75L17 7l-1.75-.75L17 5.5Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="eyb9oh05b"/><path class="liuz0k01q"/></g>`,
		"fallback": "uix-sharp:ai-mail",
	});
}

export default Component;
