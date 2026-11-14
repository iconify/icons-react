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
		"content": `<style>.f-qvggbdk {
  d: path("M12.2 19H2.5V2.5H19v9.7");
}

.g9-9z2bcm {
  d: path("M5.5 8.25h5v5h-5Zm5 2.5H16v1.4M18 15v6m-3-3h6");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="f-qvggbdk"/><path class="g9-9z2bcm"/></g>`,
		"fallback": "uix-sharp:api-key-add",
	});
}

export default Component;
