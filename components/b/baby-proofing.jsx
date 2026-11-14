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
		"content": `<style>.t5yu3c-fk {
  d: path("M7.5 20.5v-6h4v6m3.5-3h6v4h-6Zm1.5 0v-1a1.5 1.5 0 0 1 3 0v1");
}

.t70t7u1kq {
  d: path("M12.244 20.5H3.5v-10L12 3.25l8.5 7.25v2.556");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="t70t7u1kq"/><path class="t5yu3c-fk"/></g>`,
		"fallback": "uix-sharp:baby-proofing",
	});
}

export default Component;
