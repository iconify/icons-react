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
		"content": `<style>.g741aj9hn {
  d: path("m12.25 15.25l3.25-4l3.25 4");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.x2ly1vb2t {
  d: path("M9.5 6h12v12h-12Zm-2 0a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2m-5-8.5v5");
}
</style><g class="ulnmmdpxh"><path class="x2ly1vb2t"/><path class="g741aj9hn"/></g>`,
		"fallback": "uix-sharp:image-stabilization",
	});
}

export default Component;
