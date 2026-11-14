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
		"content": `<style>.r4kgkns-o {
  d: path("M3 13a3.5 3.5 0 1 0 7 0a3.5 3.5 0 1 0-7 0Zm11 0a3.5 3.5 0 1 0 7 0a3.5 3.5 0 1 0-7 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.wqo5-vbpp {
  d: path("M6.5 13H12l3-6l2.5 6M12 13L9.5 7M8 7h3m4 0l-.5-2h2M2 21.5q10-4.5 20 0");
}
</style><g class="ulnmmdpxh"><path class="r4kgkns-o"/><path class="wqo5-vbpp"/></g>`,
		"fallback": "uix-sharp:cycle-path",
	});
}

export default Component;
