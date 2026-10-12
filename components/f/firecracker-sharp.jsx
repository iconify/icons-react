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
		"content": `<style>.qr38-nb8c {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8 9.5h8v11.75H8zm0 3h8m-8 5.75h8M12 9.5V5.25h2.5m1.75.25H18M15.9 4l1.25-1M15.9 7l1.25 1");
}
</style><path class="qr38-nb8c"/>`,
		"fallback": "iconoven:firecracker-sharp",
	});
}

export default Component;
