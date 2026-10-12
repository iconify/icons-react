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
		"content": `<style>.o7z7dxbdl {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.75 12.75v-8.5h8.5v8.5m3.5 0v-5.5l2.5-3m-17.5 8.5h18.5v8.5H2.75zm3.5 4h11.5");
}
</style><path class="o7z7dxbdl"/>`,
		"fallback": "iconoven:binding-machine-sharp",
	});
}

export default Component;
