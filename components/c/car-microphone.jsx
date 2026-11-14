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
		"content": `<style>.g0dqz7xwj {
  d: path("M15 20a1 1 0 1 0 2 0a1 1 0 1 0-2 0Zm4 0a1 1 0 1 0 2 0a1 1 0 1 0-2 0Z");
}

.glbglzg7k {
  d: path("M6.5 2.5h4a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1v-8a1 1 0 0 1 1-1Z");
}

.ogeezkbok {
  d: path("M3 9.5a5.5 5.5 0 0 0 11 0M8.5 15v5M5 20h6.2m3.8 0h-1v-2a1 1 0 0 1 1-1l1.5-2.25h3L21 17a1 1 0 0 1 1 1v2h-1m-2 0h-2");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="glbglzg7k"/><path class="ogeezkbok"/><path class="g0dqz7xwj"/></g>`,
		"fallback": "uix-sharp:car-microphone",
	});
}

export default Component;
