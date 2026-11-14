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
		"content": `<style>.cpkdnxbfo {
  d: path("m8.5 10.75l4-1.75l4.5.5m-14.5 12h7V18H14v3.5h7.5");
}

.q0c57-bqm {
  d: path("M14 6.25L11 12l4.5 1l1 3.5M11 12l-3 2.5l-3.5-1");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.zc1mwbpiz {
  d: path("M13 4.5a2 2 0 1 0 4 0a2 2 0 1 0-4 0Z");
}
</style><g class="ulnmmdpxh"><path class="zc1mwbpiz"/><path class="q0c57-bqm"/><path class="cpkdnxbfo"/></g>`,
		"fallback": "uix-sharp:endless-runner",
	});
}

export default Component;
