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
		"content": `<style>.kv559ccvq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 2.808L21.192 12L12 21.192L2.808 12ZM12 7v6.25m0 3.5h.01");
}
</style><path class="kv559ccvq"/>`,
		"fallback": "uix-sharp:hazard-diamond",
	});
}

export default Component;
