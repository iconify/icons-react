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
		"content": `<style>.fqicsccrv {
  d: path("M5.75 5.25h9.5v6h-9.5ZM6 15h6m2 3a3 3 0 1 0 6 0a3 3 0 1 0-6 0Z");
}

.nr2kwkbiv {
  d: path("M17 15h2a3 3 0 0 1 0 6h-2");
}

.ttgdp5jti {
  d: path("M11.4 19.5H3v-17h15v9.7");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="ttgdp5jti"/><path class="fqicsccrv"/><path class="nr2kwkbiv"/></g>`,
		"fallback": "uix-sharp:crypto-atm",
	});
}

export default Component;
