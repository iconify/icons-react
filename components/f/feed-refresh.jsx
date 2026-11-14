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
		"content": `<style>.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.z4bw5qtpe {
  d: path("M20.5 12.5A8.5 8.5 0 1 1 12 4");
}

.z6z49eb0j {
  d: path("M10.25 2.25L12 4l-1.75 1.75M8 8.5h8v8H8Zm2.75 4h2.5");
}
</style><g class="ulnmmdpxh"><path class="z4bw5qtpe"/><path class="z6z49eb0j"/></g>`,
		"fallback": "uix-sharp:feed-refresh",
	});
}

export default Component;
