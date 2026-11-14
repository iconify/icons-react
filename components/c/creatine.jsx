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
		"content": `<style>.eust_mbki {
  d: path("M8 13h8v5H8ZM5.5 4a3 3 0 0 0 6 0Zm6 0L18 2.5");
}

.uf988qdtn {
  d: path("M4.5 10v8.5A2.5 2.5 0 0 0 7 21h10a2.5 2.5 0 0 0 2.5-2.5V10m-16-3h17v3h-17Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="uf988qdtn"/><path class="eust_mbki"/></g>`,
		"fallback": "uix-sharp:creatine",
	});
}

export default Component;
