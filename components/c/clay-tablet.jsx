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
		"content": `<style>.esx38kbtw {
  d: path("m4.311 3.992l12.873-1.809l2.505 17.825l-12.873 1.809Z");
}

.i1sjx7bzd {
  d: path("m7.699 6.545l.348 2.476l6.758-2.212Zm.661 4.704l.348 2.476l5.273-2.003Zm.661 4.704l.348 2.476l6.758-2.212Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="esx38kbtw"/><path class="i1sjx7bzd"/></g>`,
		"fallback": "uix-sharp:clay-tablet",
	});
}

export default Component;
