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
		"content": `<style>.cthgp42vw {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 2.5H8V8H2.5Zm8.5 0h5.5V8H11ZM2.5 11H8v5.5H2.5Zm8.5 0h5.5v5.5H11Zm6 10.5l4.5-8");
}
</style><path class="cthgp42vw"/>`,
		"fallback": "uix-sharp:cidr-block",
	});
}

export default Component;
