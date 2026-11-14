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
		"content": `<style>.m87kyus6u {
  d: path("M12 12.75s1.5 1.75 1.5 2.75a1.5 1.5 0 0 1-3 0c0-1 1.5-2.75 1.5-2.75Z");
}

.mvq0nnb2g {
  d: path("M6.5 10.5h11V21h-11Zm3.5 0V8h4v2.5M12 8V4.5h4");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="mvq0nnb2g"/><path class="m87kyus6u"/></g>`,
		"fallback": "uix-sharp:body-lotion",
	});
}

export default Component;
