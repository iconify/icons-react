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
		"content": `<style>.ea8zvnbga {
  d: path("M12.2 21.5H4.5v-19h15v10M8 7.5h8M8 12h8m-8 4.5h3.5");
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
</style><g class="ulnmmdpxh"><path class="ea8zvnbga"/><path class="i6g5ylb3s"/></g>`,
		"fallback": "uix-sharp:forum-locked",
	});
}

export default Component;
