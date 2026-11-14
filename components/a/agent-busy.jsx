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
		"content": `<style>.nxxxqxbbb {
  d: path("M12.7 17.5H2.5v-12h15v6.4M10 2.5v3m-3 6h.01m5.99 0h.01m2.49 3.25h5m-5 6.5h5m-4-6.5v1l3 4.5v1");
}

.sbezkcbzn {
  d: path("M19.5 14.75v1l-3 4.5v1");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="nxxxqxbbb"/><path class="sbezkcbzn"/></g>`,
		"fallback": "uix-sharp:agent-busy",
	});
}

export default Component;
