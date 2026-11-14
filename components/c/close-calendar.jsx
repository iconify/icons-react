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
		"content": `<style>.h5iwszolm {
  d: path("M12.2 21H3V4.5h17v8.2M3 9.5h17m-12.5-7v4m8-4v4");
}

.i6g5ylb3s {
  d: path("M15 17.5h6v4h-6Zm1.5 0v-1a1.5 1.5 0 0 1 3 0v1");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="h5iwszolm"/><path class="i6g5ylb3s"/></g>`,
		"fallback": "uix-sharp:close-calendar",
	});
}

export default Component;
