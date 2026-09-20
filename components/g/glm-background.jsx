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
		"content": `<style>.ft5dv1b6b {
  fill: none;
}

.nzboyp3wo {
  fill: var(--svg-color--1c408a, #1c408a);
  d: path("M24 0H0v24h24z");
}

.py7ktqbvf {
  fill: var(--svg-color--fff, #fff);
  d: path("M0 0h24v24H0z");
}

.yn22xh6-m {
  fill: var(--svg-color--fff, #fff);
  d: path("M15.887 4.92L14.97 4l-1.836 1.828a3.242 3.242 0 1 0-2.427 5.892v1.859a3.243 3.243 0 1 0 1.297 0v-1.86a3.245 3.245 0 0 0 2.051-4.977zm-2.584 3.62a1.946 1.946 0 1 1-3.892 0a1.946 1.946 0 0 1 3.892 0m0 8.216a1.946 1.946 0 1 1-3.893 0a1.946 1.946 0 0 1 3.893 0");
}
</style><g class="ft5dv1b6b"><g clip-path="url(#SVGHcSWxdhd)"><path class="nzboyp3wo"/><path class="yn22xh6-m"/></g><defs><clipPath id="SVGHcSWxdhd"><path class="py7ktqbvf"/></clipPath></defs></g>`,
		"fallback": "token-branded:glm-background",
	});
}

export default Component;
