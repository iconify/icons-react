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
		"content": `<style>.iln8gzz4c {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.25 8.5H16l.62.78l.76.94l.62.78h3.25v6.5H18l-.62.78l-.76.94L16 20H8l-.68-.74l-1.39-1.52l-.68-.74V8.5zM2.75 11v6m0-3h2.5m3-8.75h5.5m-2.75 0V8.5");
}
</style><path class="iln8gzz4c"/>`,
		"fallback": "iconoven:engine-alert-sharp",
	});
}

export default Component;
